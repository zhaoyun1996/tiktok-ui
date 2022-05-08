<template>
    <DefaultLayout>
        <template #content>
            <div id="home">
                <h2>Home page</h2>
            </div>
        </template>
    </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/components/Layout/DefaultLayout/DefaultLayout.vue';
export default {
    name: 'Home',
    components: {
        DefaultLayout,
    },
};
</script>
