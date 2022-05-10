<template>
    <header :class="cx('wrapper')">
        <div :class="cx('inner')">
            <img :src="logoUrl" alt="Tiktok" />
            <Popper>
                <div :class="cx('search')">
                    <input placeholder="Search accounts and videos" :spellCheck="false" />
                    <button :class="cx('clear')">
                        <FontAwesomeIcon icon="circle-xmark" />
                    </button>
                    <FontAwesomeIcon :class="cx('loading')" icon="spinner" />

                    <button :class="cx('search-btn')">
                        <FontAwesomeIcon icon="magnifying-glass" />
                    </button>
                </div>
                <template #content>
                    <div :class="cx('search-result')" tabIndex="-1">
                        <PopperWrapper>
                            <template #content>
                                <h4 :class="cx('search-title')">Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </template>
                        </PopperWrapper>
                    </div>
                </template>
            </Popper>
            <div :class="cx('actions')">
                <Button text>
                    <template #content>Upload</template>
                </Button>
                <Button primary>
                    <template #content>Log in</template>
                </Button>

                <Menu :items="menuItems">
                    <template #content>
                        <button :class="cx('more-btn')">
                            <FontAwesomeIcon icon="ellipsis-vertical" />
                        </button>
                    </template>
                </Menu>
            </div>
        </div>
    </header>
</template>

<script>
import Popper from 'vue3-popper';
import classNames from 'classnames/bind';
import styles from '@/assets/scss/Header.module.scss';

import images from '@/assets/images';
import AccountItem from '@/components/AccountItem/AccountItem.vue';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import Button from '@/components/Button/Button.vue';
import Menu from '@/components/Popper/Menu/Menu.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import specific icons */
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faSpinner,
    faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faSpinner,
    faCheckCircle,
);

export default {
    name: 'Header',
    components: {
        Popper,
        AccountItem,
        PopperWrapper,
        Button,
        Menu,
    },
    data() {
        return {
            cx: classNames.bind(styles),
            logoUrl: images.logo,
            menuItems: [
                {
                    icon: 'earth-asia',
                    component: 'FontAwesomeIcon',
                    title: 'English',
                },
                {
                    icon: 'circle-question',
                    title: 'Feedback and help',
                    component: 'FontAwesomeIcon',
                    to: '/feedback',
                },
                {
                    icon: 'keyboard',
                    component: 'FontAwesomeIcon',
                    title: 'Keyboard shortcuts',
                },
            ],
        };
    },
};
</script>
