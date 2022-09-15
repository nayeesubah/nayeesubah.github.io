<template>
    <PartialTheTopbar/>
    <PartialTheHeader/>
    <slot name="hero"><PartialTheHero/></slot>
    <main id="main">
      <slot />
    </main>
    <PartialTheFooter/>
</template>