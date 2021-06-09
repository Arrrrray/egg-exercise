<template>
    <div>
        <van-uploader
            v-model="fileList"
            :max-count="1"
            :after-read="afterRead"
        />
        <van-cell-group>
            <van-field
                label="文章标题"
                placeholder="文章标题"
                v-model="title"
            />
            <van-field
                label="文章简介"
                placeholder="文章简介"
                v-model="summary"
            />
            <van-field
                label="文章内容"
                placeholder="文章内容"
                v-model="content"
                type="textarea"
                auto-size
            />
        </van-cell-group>
        <van-button type="primary" @click="handleAdd" class="add-button"
            >提交</van-button
        >
    </div>
</template>
<script>
import { Uploader, CellGroup, Field, Button } from "vant";
export default {
    components: {
        [Uploader.name]: Uploader,
        [CellGroup.name]: CellGroup,
        [Field.name]: Field,
        [Button.name]: Button,
    },
    data() {
        return {
            fileList: [],
            title: "",
            summary: "",
            content: "",
            img: "",
        };
    },
    methods: {
        afterRead(file) {
            file.status = "uploading";
            file.message = "上传中...";

            setTimeout(() => {
                file.status = "complete";
                file.message = "上传成功";
                this.img = file.content;
            }, 1000);
        },
        handleAdd() {
            const { title, summary, content, img } = this;
            const data = { title, summary, content, img };
            console.log(data);
        },
    },
};
</script>
<style scoped>
.add-button {
    position: absolute;
    left: 0;
    bottom: 80px;
    width: 100%;
}
</style>
