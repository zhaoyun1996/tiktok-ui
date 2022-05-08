<template>
    <DefaultLayout>
        <template #content>
            <div id="upload">
                <h2>Upload page</h2>
            </div>
        </template>
    </DefaultLayout>
</template>

<script>
import HeaderOnly from '@/components/Layout/HeaderOnly/HeaderOnly.vue';
export default {
    name: 'Upload',
    components: {
        HeaderOnly,
    },
};
</script>
