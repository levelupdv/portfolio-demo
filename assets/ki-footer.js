$(document).ready(function () {
  if ($(window).width() <= 989) {
    $(".footer-block--menu").click(function () {
      $(this).find("ul").slideToggle();
      $(this).find("h2").toggleClass("minus");
    });
  }
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // SITE SCROLLER
  if ($(window).scrollTop() > 200) {
    $("#site-scroll").fadeIn();
  } else {
    $("#site-scroll").fadeOut();
  }
}

$("#site-scroll").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1000);
  return false;
});

// Dynamic import for liquid metal shader
(async function () {
  const container = document.getElementById("liquid-metal");

  if (container) {
    try {
      const { liquidMetalFragmentShader, ShaderMount } = await import(
        "https://esm.sh/@paper-design/shaders"
      );

      new ShaderMount(
        container,
        liquidMetalFragmentShader,
        {
          u_repetition: 1.5,
          u_softness: 0.5,
          u_shiftRed: 0.3,
          u_shiftBlue: 0.3,
          u_distortion: 0,
          u_contour: 0,
          u_angle: 100,
          u_scale: 1.5,
          u_shape: 1,
          u_offsetX: 0.1,
          u_offsetY: -0.1,
        },
        undefined,
        0.6
      );
    } catch (error) {
      console.error("Failed to load shader:", error);
    }
  }
})();
