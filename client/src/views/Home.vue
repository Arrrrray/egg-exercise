<template>
    <div class="home">
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <van-cell
                v-for="item in list"
                :key="item.id"
                @click="handelClick(item.id)"
            >
                <div class="list">
                    <div class="left">
                        <img :src="item.img" alt="" />
                    </div>
                    <div class="right">
                        <div class="title">{{ item.title }}</div>
                        <div class="create-time">{{ item.createTime }}</div>
                    </div>
                </div>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
import { List, Cell } from "vant";

export default {
    name: "Home",
    components: {
        [List.name]: List,
        [Cell.name]: Cell,
    },
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
        };
    },
    methods: {
        handelClick(id) {
            this.$router.push({
                path: "/detail",
                query: {
                    id,
                },
            });
        },
        onLoad() {
            // 异步更新数据
            // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    this.list.push({
                        id: this.list.length,
                        title: this.list.length,
                        createTime: "2021-06-06 15:15:15",
                        img: "../assets/logo.png",
                    });
                }

                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 40) {
                    this.finished = true;
                }
            }, 1000);
        },
    },
};
</script>
<style scoped>
.list {
    display: flex;
    flex-direction: row;
}
.list .left {
    width: 150px;
    height: 100px;
    border-radius: 10px;
}
.list .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 15px;
}
.list .right .title {
    font-size: 18px;
}
.list .right .create-time {
    font-size: 12px;
    color: #9e9e9e;
}
</style>
