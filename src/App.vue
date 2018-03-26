<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h1>{{ msg }}</h1>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/foo">Foo</router-link>
            </li>
            <li>
                <router-link to="/bar">Bar</router-link>
            </li>
        </ul>
        <router-view class="content" />
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            msg: 'Welcome to Your Vue.js SSR App'
        }
    }
}
</script>

<style lang="less">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
    &.router-link-exact-active {
        cursor: default;
        pointer-events: none;
        text-decoration: none;
        color: #2c3e50;
    }
}

.content {
    width: 60%;
    margin: 0 auto;
}
</style>
