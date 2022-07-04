<template>
    <nav>
        <ul class="route">
            <li class="route-item fs-30px" v-for="route in routeMap" :key="route.name">
                <img src="/icons/icon-park-outline_lotus.svg" class="icon">
                <p>{{ route.name }}</p>
            </li>
        </ul>
    </nav>
</template>

<script>




export default {
    data() {
        return {
            routeMap
        }
    }

}
const routeMap = [
    {
        path: '',
        name: 'Rối Nước',
    },
    {
        path: '',
        name: 'Trò Tích',
    },
    {
        path: '',
        name: 'Rồng Vàng',
    },
    {
        path: '',
        name: 'Booking',
    },
    {
        path: '',
        name: 'Lưu niệm',
    },
    {
        path: '',
        name: 'Liên hệ',
    }
]
</script>

<style lang="scss">
.route-item {
    display: flex;
    align-items: center;
    margin-top: 2rem;

    .icon {
        width: 1em;
        height: 1em;
        margin-left: 1rem;
        margin-right: 2rem;

    }
}
</style>