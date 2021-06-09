<template>
    <div class="detail">
        <div class="title">{{ detail.title }}</div>
        <div class="summary">{{ detail.summary }}</div>
        <div class="content">{{ detail.content }}</div>
        <div class="create-time">{{ detail.createTime }}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            detail: {
                id: 2,
                title: "123312",
                summary: "908908900990",
                content: "付哈是计科大家开始活动将卡还是恐惧的哈看见的",
                createTime: "2021-06-06 15:15:15",
                img: "../assets/logo.png",
            },
        };
    },
};
</script>
<style scoped>
.detail {
    padding: 20px;
    text-align: left;
}
.detail .title {
    font-size: 25px;
    padding-bottom: 20px;
}
.detail .summary {
    padding: 20px;
    background: #dcdcdc;
}
.detail .content {
    padding: 20px;
    text-indent: 2em;
    line-height: 200%;
}
.detail .create-time {
    color: #9c9c9c;
    text-align: right;
}
</style>
