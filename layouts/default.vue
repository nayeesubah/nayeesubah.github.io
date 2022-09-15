<template>
  <div>
  <client-only>
    <!-- <PartialTheTopbar/> -->
    <PartialTheHeader/>
    <slot name="hero"></slot>
    <main id="main">
      <slot />
    </main>
    <PartialTheFooter/>
    </client-only>
  </div>
</template>