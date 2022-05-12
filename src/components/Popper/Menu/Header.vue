<template>
    <header :class="cx('header')">
        <button :className="cx('back-btn')" @click="onBack">
            <FontAwesomeIcon icon="chevron-left" />
        </button>
        <h4 :className="cx('header-title')">{{ title }}</h4>
    </header>
</template>

<script>
import classNames from 'classnames/bind';
import styles from '@/assets/scss/Menu.module.scss';

export default {
    name: 'MenuItem',
    data() {
        return {
            cx: classNames.bind(styles),
        };
    },
    props: {
        title: {
            type: String,
        },
    },
    methods: {
        /**
         * Sự kiện quay lại menu chính
         */
        onBack() {
            const me = this;

            me.$emit('onBack');
        },
    },
};
</script>
