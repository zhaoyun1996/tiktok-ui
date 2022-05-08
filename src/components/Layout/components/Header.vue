<template>
    <header :class="cx('wrapper')">
        <div :class="cx('inner')">
            <img :src="logoUrl" alt="Tiktok" />
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
            <div :class="cx('actions')"></div>
        </div>
    </header>
</template>

<script>
import classNames from 'classnames/bind';
import styles from '@/assets/scss/Header.module.scss';
import images from '@/assets/images';

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
    },
    data() {
        return {
            cx: classNames.bind(styles),
            logoUrl: images.logo,
        };
    },
};
</script>
