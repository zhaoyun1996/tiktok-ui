<template>
    <Popper :closeDelay="700" placement="bottom-end" hover @close:popper="closeMenu">
        <slot name="content"></slot>
        <template #content>
            <div :class="cx('menu-list')" tabIndex="-1" v-bind="$attrs">
                <PopperWrapper :class="cx('menu-popper')">
                    <template #content>
                        <Header v-if="history.length > 1" title="Language" @onBack="onBack" />
                        <MenuItem
                            v-for="(item, index) in current.data"
                            :key="index"
                            :data="item"
                            @click="clickMenuItem(item)"
                        />
                    </template>
                </PopperWrapper>
            </div>
        </template>
    </Popper>
</template>

<script>
import Popper from 'vue3-popper';
import classNames from 'classnames/bind';
import styles from '@/assets/scss/Menu.module.scss';

import Button from '@/components/Button/Button.vue';
import MenuItem from '@/components/Popper/Menu/MenuItem.vue';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import Header from '@/components/Popper/Menu/Header.vue';

export default {
    name: 'Menu',
    components: {
        Popper,
        Button,
        MenuItem,
        PopperWrapper,
        Header,
    },
    data() {
        const me = this;

        return {
            cx: classNames.bind(styles),
            history: [{ data: me.items }],
        };
    },
    computed: {
        current() {
            const me = this;

            return me.history[me.history.length - 1];
        },
    },
    props: {
        items: {
            type: Array,
            default: [],
        },
        onChange: {
            type: Function,
            default: () => {},
        },
    },
    methods: {
        /**
         * Sự kiện khi chọn item
         */
        clickMenuItem(item) {
            const me = this;

            if (!!item.children) {
                me.openChooseLanguage(item);
            } else {
                me.onChange(item);
            }
        },

        /**
         * Sự kiện mở menu ngôn ngữ
         */
        openChooseLanguage(item) {
            const me = this;

            me.history.push(item.children);
        },

        /**
         * Sự kiện quay trở lại menu chính
         */
        onBack() {
            const me = this;

            me.history.pop();
        },

        /**
         * Sự kiện khi đóng menu
         */
        closeMenu() {
            const me = this;

            if (me.history.length > 1) {
                me.history.pop();
            }
        },
    },
};
</script>
