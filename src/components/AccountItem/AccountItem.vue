<template>
    <div :class="cx('wrapper')">
        <img
            :class="cx('avatar')"
            src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/b52bf5e0a914ece14f6a27286a697941~c5_300x300.webp?x-expires=1652194800&x-signature=EVkUWBvc5hs6Jjhqr1zu5o%2FJZRE%3D"
            alt="Hoaa"
        />
        <div :class="cx('info')">
            <h4 :class="cx('name')">
                <span>toilaxuu</span>
                <FontAwesomeIcon :class="cx('check')" icon="check-circle" />
            </h4>
            <span :class="cx('username')">user684019677450</span>
        </div>
    </div>
</template>

<script>
import classNames from 'classnames/bind';
import styles from '@/assets/scss/AccountItem.module.scss';

export default {
    name: 'AccountItem',
    data() {
        return {
            cx: classNames.bind(styles),
        };
    },
};
</script>
