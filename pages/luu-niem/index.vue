<template>
  <div id="souvenir" class="container">
    <AppTitle :level="1" title="Lưu niệm" />

    <section class="souvenir-puppet">
      <AppTitle :level="2" title="Quân rối" />
      <div class="souvenir-puppet__list">
        <div class="souvenir-puppet__col">
          <SouvenirCard
            v-for="item in souvenirs[0]"
            :key="item"
            :class="`${item.size || ''} souvenir-puppet__item`"
            :item="item"
            @add="goToInfo(item.slug)"
          />
        </div>
        <div class="souvenir-puppet__col">
          <SouvenirCard
            v-for="item in souvenirs[1]"
            :key="item"
            :class="`${item.size || ''} souvenir-puppet__item`"
            :item="item"
            @add="goToInfo(item.slug)"
          />
        </div>
      </div>
    </section>

    <section class="souvenir-gift">
      <AppTitle :level="2" title="Quà tặng" />
      <div class="souvenir-puppet__list">
        <div class="souvenir-puppet__col">
          <SouvenirCard
            v-for="item in gifts[0]"
            :key="item"
            :class="`${item.size || ''} souvenir-puppet__item`"
            :item="item"
            @add="goToInfo(item.slug)"
          />
        </div>
        <div class="souvenir-puppet__col">
          <SouvenirCard
            v-for="item in gifts[1]"
            :key="item"
            :class="`${item.size || ''} souvenir-puppet__item`"
            :item="item"
            @add="goToInfo(item.slug)"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { findByCategory } = useSouvenir();
const router = useRouter();

const _souvenirs = findByCategory('souvenir');
const _gifts = findByCategory('gift');

const souvenirs = [_souvenirs.slice(0, 3), _souvenirs.slice(3, 6)];
const gifts = [_gifts.slice(0, 4), _gifts.slice(4, 8)];

function goToInfo (slug) {
  router.push(`/luu-niem/${slug}`);
}
</script>

<style lang="scss">
#souvenir {
  --space-xsm: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 3rem;

  padding-left: var(--space-sm);
  padding-right: var(--space-sm);

  .title {
    padding: var(--space-sm) 0;
  }

  .souvenir-puppet {
    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-md);
    }

    &__col {
      display: flex;
      flex-direction: column;
    }

    &__item {
      padding-bottom: var(--space-sm);
    }
  }
}
</style>
