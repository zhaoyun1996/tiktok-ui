<template>
    <component :is="comp" :class="cx(classes)" v-bind="propAttrs">
        <span v-if="leftIcon" :class="cx('icon')">{{ leftIcon }}</span>
        <span :class="cx('title')">
            <slot name="content"></slot>
        </span>
        <span v-if="rightIcon" :class="cx('icon')">{{ rightIcon }}</span>
    </component>
</template>

<script>
import classNames from 'classnames/bind';
import styles from '@/assets/scss/Button.module.scss';

export default {
    name: 'Wrapper',
    data() {
        return {
            cx: classNames.bind(styles),
            classes: '',
            comp: 'button',
            propAttrs: null,
        };
    },
    props: {
        to: {
            type: String,
        },
        href: {
            type: String,
        },
        primary: {
            type: Boolean,
            default: false,
        },
        outline: {
            type: Boolean,
            default: false,
        },
        text: {
            type: Boolean,
            default: false,
        },
        rounded: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        small: {
            type: Boolean,
            default: false,
        },
        large: {
            type: Boolean,
            default: false,
        },
        className: {
            type: String,
        },
        leftIcon: {
            type: String,
        },
        rightIcon: {
            type: String,
        },
        onClick: {
            type: Function,
        },
    },
    mounted() {
        console.log(this.attrs);
        const me = this;

        let primary = me.primary,
            outline = me.outline,
            text = me.text,
            disabled = me.disabled,
            rounded = me.rounded,
            small = me.small,
            large = me.large,
            onClick = me.onClick,
            passProps = me.$attrs;

        me.propAttrs = {
            onClick,
            passProps,
        };

        // Remove event listener when btn is disabled
        if (me.disabled) {
            Object.keys(me.propAttrs).forEach((key) => {
                if (key.startsWith('on') && typeof me.propAttrs[key] === 'function') {
                    delete me.propAttrs[key];
                }
            });
        }

        if (me.to) {
            me.propAttrs.to = me.to;
            me.comp = 'router-link';
        } else if (me.href) {
            me.propAttrs.href = me.href;
            me.comp = 'a';
        }

        me.classes = me.cx('wrapper', {
            [me.className]: me.className,
            primary,
            outline,
            text,
            disabled,
            rounded,
            small,
            large,
        });
    },
};
</script>
