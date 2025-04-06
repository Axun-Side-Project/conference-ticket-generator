<template>
  <section id="app">

    <!-- Pattern -->
    <img class="pattern lines_pattern" :src="lines_pattern" alt="">
    <img class="pattern circle_pattern" :src="circle_pattern" alt="">
    <img class="pattern squiggly_line_top_pattern" :src="squiggly_line_top_pattern" alt="">
    <img class="pattern squiggly_line_bottom_pattern" :src="squiggly_line_bottom_pattern" alt="">

    <!-- Content -->
    <section class="content">

      <!-- Header -->
      <div>
        <img :src="logo_svg" alt="">
      </div>

      <!-- First -->
      <template v-if="!showTicket">

        <!-- Title -->
        <div>
          <h1 class="title">Your Journey to Coding Conf<br>2025 Starts Here!</h1>
          <p class="subtitle">Secure your spot at next year's biggest coding conference.</p>
        </div>

        <Form />
        
      </template>

      <!-- Second -->
      <template v-else>
        
        <!-- Title -->
        <div>
          <h1 class="title">Congrats, <span class="gradient-text">{{ ticket.name }}</span>!<br>Your ticket is ready.</h1>
          <p class="subtitle">We've emailed your ticket to<br><span class="email-text">{{ ticket.email }}</span> and will send updates in<br>the run up to the event.</p>
        </div>

        <Ticket />

      </template>

    </section>

  </section>
</template>

<script lang="ts">
import squiggly_line_top_pattern from "/assets/images/pattern-squiggly-line-top.svg";
import lines_pattern from "/assets/images/pattern-lines.svg";
import circle_pattern from "/assets/images/pattern-circle.svg";
import squiggly_line_bottom_pattern from "/assets/images/pattern-squiggly-line-bottom.svg";
import logo_svg from "/assets/images/logo-full.svg";
import Form from "@/components/Form.vue";
import Ticket from "@/components/Ticket.vue";

export default {
  name: "App",
  components: {
    Form,
    Ticket,
  },
  data() {
    return {
      squiggly_line_top_pattern: squiggly_line_top_pattern,
      lines_pattern: lines_pattern,
      circle_pattern: circle_pattern,
      squiggly_line_bottom_pattern: squiggly_line_bottom_pattern,
      logo_svg: logo_svg,
    };
  },
  computed: {
    showTicket() {
      return this.$store.getters["isShowTicket"];
    },
    ticket() {
			return this.$store.getters["getForm"];
		},
  },
}
</script>

<style style="scss" scoped>
section#app {
  position: relative;
  background: url("/assets/images/background-desktop.png");
  background-size: 100% 100%;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  color: white;
  img.pattern {
    width: 100%;
    position: absolute;
    z-index: 1;
  }
  img.squiggly_line_top_pattern {
    top: 8vh;
    right: 0;
  }
  img.lines_pattern {
    top: 0;
    height: 100%;
  }
  img.circle_pattern {
    top: 50%;
    left: 65%;
  }
  img.squiggly_line_bottom_pattern {
    left: 0;
    bottom: 0;
  }
  section.content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 2.4rem 1rem;
    * {
      z-index: 100;
    }
    /* First */
    h1.title {
      margin-top: 2rem;
      font-size: 3rem;
    }
    p.subtitle {
      font-size: 1.2rem;
    }
    h1.title,
    p.subtitle {
      text-align: center;
      margin-bottom: 1.2rem;
      z-index: 10;
    }
    /* Second */
    .gradient-text {
      background: linear-gradient(135deg, hsl(7, 86%, 67%), hsl(0, 0%, 100%));
      background-clip: text;
      color: transparent;
    }
    .email-text{
      color: hsl(7, 86%, 67%);
    }
  }
}
</style>