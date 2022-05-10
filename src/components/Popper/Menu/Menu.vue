<template>
    <Popper :closeDelay="700" placement="bottom-end" hover>
        <slot name="content"></slot>
        <template #content>
            <div :class="cx('menu-list')" tabIndex="-1" v-bind="$attrs">
                <PopperWrapper :class="cx('menu-popper')">
                    <template #content>
                        <MenuItem v-for="(item, index) in items" :key="index" :data="item" />
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

export default {
    name: 'Menu',
    components: {
        Popper,
        Button,
        MenuItem,
        PopperWrapper,
    },
    data() {
        return {
            cx: classNames.bind(styles),
        };
    },
    props: {
        items: {
            type: Array,
            default: [],
        },
    },
};
</script>
