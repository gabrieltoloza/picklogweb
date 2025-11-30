<template>
    <div class="combined-svg-container">
        <!-- SVG de fondo (BussinesFlowSvg) -->
        <svg class="background-svg" width="79" height="80" viewBox="0 0 79 80" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <foreignObject x="-49.7393" y="-50" width="178.262" height="180">
                <div xmlns="http://www.w3.org/1999/xhtml"
                    style="backdrop-filter:blur(25px);clip-path:url(#bgblur_0_483_577_clip_path);height:100%;width:100%">
                </div>
            </foreignObject>
            <g data-figma-bg-blur-radius="50">
                <rect x="0.260742" width="78.2617" height="80" rx="39.1308" fill="white" fill-opacity="0.07" />
                <rect x="2.26074" y="2" width="74.2617" height="76" rx="37.1308" stroke="white" stroke-opacity="0.06"
                    stroke-width="4" />
            </g>
            <defs>
                <clipPath id="bgblur_0_483_577_clip_path" transform="translate(49.7393 50)">
                    <rect x="0.260742" width="78.2617" height="80" rx="39.1308" />
                </clipPath>
            </defs>
        </svg>

        <!-- SVG de Meli centrado encima -->
        <svg class="meli-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 595.28 595.28">
            <circle class="st0" cx="289.73" cy="272.72" r="215.83" />
            <path class="st1"
                d="M276.6,322.1c-2.49,0-4.81.7-6.79,1.91,3.22-8.78,1.33-17.6-4.6-20.26-4.45-2-9.99.02-14.35,4.65-.2-5.23-2.72-9.79-7.06-11.75-5.64-2.54-12.53.14-16.76,6.03-.45-6.07-5.5-10.85-11.68-10.85s-11.72,5.25-11.72,11.72,5.25,11.72,11.72,11.72c3.12,0,5.95-1.23,8.05-3.21-.7,6.3,1.89,12.15,6.97,14.43,4.38,1.97,9.5.79,13.55-2.58-.52,6.27,1.65,11.7,6.07,13.69,4.19,1.88,9.33.2,13.56-3.85-.05.49-.09.98-.09,1.48,0,7.25,5.88,13.13,13.13,13.13s13.13-5.88,13.13-13.13-5.88-13.13-13.13-13.13Z" />
            <path class="st1"
                d="M204.29,296.35l-2.28-1.51-2.61-1.66c-2.79-1.44-4.79-3.44-6.79-5.44-16-8-32-10-50-13-6-1-12-4-12-11,1-9,5-15,10-23,7-10,15-19,26.48-24.32l32.31,10.14,14.33,3.32s16.67,2.75,25.49-3.32c2.46-1.7,5.88-1.12,8.82-1.65l6.74,2.42" />
            <path class="st1" d="M376.27,287.13l1.93.2,2.14,1.9s10.65,22.37-16.34,19.53l-25.87-25.12" />
            <path class="st1"
                d="M378.2,287.33l1.79.19.71-.46,2.85-.9,62.9-21.63c1.32-37.74-33.77-52.52-33.77-52.52l-21.85,7.28s-17.66,6.62-38.4.88-30.15-11.48-30.15-11.48c0,0-33.95-13.24-59.94,9.93-.87.78-1.71,1.53-2.52,2.27-23.32,21.1-21.26,23.78-21.26,23.78,0,0,10.15,13.68,33.32,1.1l18.98-14.57s10.37-7.5,25.38,3.31c15.01,10.81,30.55,24.88,30.55,24.88l31.42,27.92" />
            <path class="st1" d="M322.77,303.19l20.91,22.35s20.04,1.34,20.33-16.78l-1.23-.17" />
            <path class="st1" d="M307.05,320.64l15,17.02c16.15,3.46,21.63-12.11,21.63-12.11" />
            <path class="st1" d="M289.97,338.16s18.59,13.53,31.28.55l-.87-.02" />
        </svg>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.combined-svg-container {
    position: relative;
    display: inline-block;
    width: 79px;
    height: 80px;
}

.background-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.meli-svg {
    position: absolute;
    top: 55%;
    left: 52%;
    transform: translate(-50%, -50%);
    width: 96px;
    height: 96px;
    z-index: 2;
}

.st0 {
    fill: #f1c475;
}

.st1 {
    fill: none;
    stroke: #25282b;
    stroke-miterlimit: 10;
    stroke-width: 8px;
}
</style>