<template>
    <div id="default-layout">
        <Header />
        <div class="container">
            <Sidebar />
            <div class="content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Layout/DefaultLayout/Header.vue';
import Sidebar from '@/components/Layout/DefaultLayout/Sidebar.vue';
export default {
    name: 'DefaultLayout',
    components: {
        Header,
        Sidebar,
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/GlobalStyles.scss';
</style>
