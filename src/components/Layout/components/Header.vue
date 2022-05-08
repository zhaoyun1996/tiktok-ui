<template>
    <header :className="cxWrapper">
        <div :className="cxInner"></div>
    </header>
</template>

<script>
import classNames from 'classnames/bind';
import styles from '@/assets/scss/Header.module.scss';

export default {
    name: 'Header',
    data() {
        const cx = classNames.bind(styles);
        return {
            cxWrapper: cx('wrapper'),
            cxInner: cx('inner'),
        };
    },
};
</script>
