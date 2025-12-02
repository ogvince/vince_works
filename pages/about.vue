<template>
  <section id="about">
    <div class="container">
       <img src="/images/svg/vince.works_head-logo.svg" class="head"/>
      <section>
        <p>
          <strong>vince.works</strong> is the creative playground of a former web developer and
          project manager who never stopped designing.
        </p>
        <p>
          After years working in digital agencies on websites, branding, and content, I now focus my
          energy on projects that truly excite me — not on long-term freelance contracts. I have a
          full-time job, so what I’m looking for today isn’t volume or profitability, but <strong>meaningful
          collaborations</strong> in artistic fields that resonate with my style.
        </p>
      </section>

      <section>
        <p>
          I integrated a selection of past freelance design projects because I want to expand my
          network and offer <strong>graphic design, art direction, and social media content creation</strong> to
          people, collectives, and brands whose aesthetic aligns with mine. My goal is simple:
        </p>
        <p>
          <strong>
            Build new references, contribute to inspiring work, and create without the pressure of
            “making a living out of it.”</strong>
          
        </p>
      </section>

      <section>
        <p>Selected teams & collaborations :</p>
        <ul>
          <li>-Art direction <a href="https://www.instagram.com/mamamusicandconvention/" target="_blank">@mamamusicandconvention</a></li>
          <li>-Art direction + dev <a href="https://www.instagram.com/madandwomen/" target="_blank">@madandwomen</a></li>
          <li>-Dev <a href="https://www.instagram.com/nemaprod/" target="_blank">@nemaprod</a></li>
          <li>-Dev <a href="https://www.instagram.com/applecore/" target="_blank">@applecore</a></li>
          <li>-Dev <a href="https://www.instagram.com/heidisparis/" target="_blank">@heidisparis</a></li>
          <li>-Project manager — <a href="https://www.instagram.com/adveris_paris/" target="_blank">@adveris</a></li>
          <li>-Dev <a href="https://www.instagram.com/neueweb/" target="_blank">@neueweb</a></li>
          <li>-Art direction + dev <a href="https://www.instagram.com/bleu.mercure/" target="_blank">@bleu.mercure</a></li>
        </ul>
      </section>

      <section>
        <p>
          Alongside vince.works, I'm also building a <strong>screen printing workshop</strong>. I already work with a heat press and I’m exploring
          plotter printing, with growing production contacts in Vietnam.
        </p>
      </section>

      <section>
        <p>
          I split my time between my full-time job, training, and this creative brand — working a
          couple of hours on weekdays and fully dedicating my weekends to the studio. This is
          my space where I reconnect with what made me love creating in the first place: <strong>designing
          with intention, crafting visuals by hand, and collaborating on projects that carry a soul</strong>.
        </p>
      </section>


        <p>
          If you’re building something artistic, bold, or experimental and you think my style could
          fit —
        </p>
        <p><strong>let’s talk.</strong></p>
        <p><strong>hello@vince.works</strong></p>
        <div style="width:10px; height:50px"></div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
#about{
  background:black; 
  color:white;
  font-family: "Lausanne 300";
  width: 100vw;
  height: 100vh;
  display: flex;
  padding-top:100px;
  padding-bottom: 200px!important;
  justify-content: center;
  text-align: justify;
  overflow-y:scroll;
  .container{
    max-width: 420px;
    strong{
      font-family: "Lausanne 500";
    }
        .head{
  width: calc(0% + 360px);
  left: calc(50% - 180px);
  position:relative;
  }
  }
}

ul{
  list-style: none;
  padding:0;
  li{
    a{
      color:white
    }
  }
}

  @media screen and (max-width: 700px) {
#about{
  .container{
    width: 100%;
    padding-left:10px;
    padding-right: 10px;
  }
}

  }
</style>