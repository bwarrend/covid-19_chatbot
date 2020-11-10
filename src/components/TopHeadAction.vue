<template>
    <div>
        <button
            class="top-head-action"
            :title="title"
            :aria-label="title">
            <i aria-hidden="true" class="material-icons">{{icon}}</i>
        </button>
        <div class="zoom-i">CTRL+SCROLL</div>
        <div class="zoom-i">   to</div>
        <div class="zoom-i">zoom</div>
        
    </div>
</template>

<style lang="sass" scoped>
@import '@/style/mixins'

.top-head-action
    @include reset
    display: flex
    margin: 8px 0
    padding: 10px 12px
    border-radius: 40px 0 0 40px
    border: var(--border)
    border-right: none
    cursor: pointer
    color: var(--text-primary)
    transition: padding .25s var(--animation-timing)

    &:hover
        padding-right: 20px
.zoom-i
    text-align: center
    color: white

</style>

<script>
export default {
    name: 'TopHeadAction',
    props: {
        title: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        }
    }
}
</script>
