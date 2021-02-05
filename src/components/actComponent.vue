<template>
    <div class="activity">
        <div class="activity-images">
            <img class="front-image" :src="activity.frontImgSrc">
            <img class="back-image" :src="activity.backImgSrc">
        </div>
        <div class="activity-info">
            <h1 class="info-title">{{ activity.title }}</h1>
            <p class="info-context">{{ activity.context }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name : 'actComponent',
    data() {
        return {
            
        }
    },
    props : [
        'activity'
    ],
}
</script>

<style scoped>
.activity-images {
    display: inline-block;
}

.activity-info {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
}

.front-image {
    display: inline-block;
    position: relative;
    width: 300px;
    height: 200px;
    animation: imageIn 1.5s both 1;
}

.back-image {
    display: inline-block;
    position: relative;
    width: 300px;
    height: 200px;
    animation: imageIn 1s 1.5s both 1;
}

@keyframes imageIn {
    from {
        transform: scale(1.2);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}
</style>