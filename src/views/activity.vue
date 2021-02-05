<template>
  <div>
      <actComponent v-for="(activity, index) in activities" :key="index" :activity="activity" />
  </div>
</template>

<script>
import actComponent from '@/components/actComponent';

export default {
    name : 'activity',
    data() {
        return {
            activities : [
                {
                    frontImgSrc : require('@/assets/activity/data-1.jpg'),
                    backImgSrc : require('@/assets/activity/data-2.jpg'),
                    title : '청년 데이터 캠퍼스',
                    context : '응쓰게싸'
                },
                {
                    frontImgSrc : require('@/assets/activity/posco-1.jpg'),
                    backImgSrc : require('@/assets/activity/posco-2.jpg'),
                    title : '청년 AI·Big Data 아카데미',
                    context : '호놀루루'
                },
                {
                    frontImgSrc : require('@/assets/activity/ssafy-1.jpg'),
                    backImgSrc : require('@/assets/activity/ssafy-2.jpg'),
                    title : '삼성 청년 소프트웨어 아카데미 3기 - SSAFY 3rd',
                    context : '소도베냐'
                }
            ]
        }
    },
    components : {
        actComponent
    }

}
</script>

<style>

</style>