<template>
    <main class="home">
        <div class="main-image"></div>
        <article>
            <h1>Múa rối nước là một nghệ thuật sân khấu dân gian.</h1>
            <div class="description">
                <p> Từ nghệ thuật dân gian, Rối Nước trở thành truyền thống, sáng tạo của người Việt. </p>
                <div>Next</div>
            </div>
        </article>
    </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
.home {
    .main-image {
        background-image: url('images/home-bg.jpg');
        background-size: auto 100%;
        background-repeat: no-repeat;
        height: 65vh;
        width: 100%;
    }

    article {
        margin: 0 1em;

        h1 {
            font-size: 1.7rem;
        }

        .description {
            padding-top: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;

            p {
                flex: 7;
            }

            div {
                flex: 3;
            }
        }
    }

}
</style>
