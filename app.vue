<template>
<!-- Welcome to my website - hello@vince.works -->
  <div id="vince_works">
    <Head>
      <Title>hello@vince.works</Title>
   </Head>
    <Loader/>
    <Header/>
    <NuxtPage />
  </div>
</template>



<style lang="scss">
* {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  box-sizing: border-box;
}

body{
  margin: 0;
  padding: 0;
  position: fixed;
  top:0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
@font-face {
  font-family: "Lausanne 500";
  src: url("/assets/fonts/Lausanne-500.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Lausanne 300";
  src: url("/assets/fonts/Lausanne-300.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}



</style>