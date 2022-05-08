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
            <div :class="cx('actions')"></div>
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

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import specific icons */
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* add icons to the library */
library.add(faCircleXmark, faMagnifyingGlass, faSpinner);

export default {
    name: 'Header',
    components: {
        FontAwesomeIcon,
        Popper,
        AccountItem,
        PopperWrapper,
    },
    data() {
        return {
            cx: classNames.bind(styles),
            logoUrl: images.logo,
        };
    },
};
</script>
