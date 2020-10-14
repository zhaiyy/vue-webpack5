<template>
    <div>
        <h1>这是一个头部导航{{name}}</h1>
        <h2>哈哈哈哈哈 成功了!!!!!</h2>
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        }
    }
}
</script>