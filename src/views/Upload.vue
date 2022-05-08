<template>
    <HeaderOnly>
        <template #content>
            <div id="upload">
                <h2>Upload page</h2>
            </div>
        </template>
    </HeaderOnly>
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
