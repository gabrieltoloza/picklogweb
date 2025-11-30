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

        <!-- SVG del camión centrado encima -->
        <svg class="truck-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 595.28 595.28">
            <circle class="st0" cx="305.69" cy="282.72" r="215.83"/>
            <g>
                <path class="st1" d="M179.39,166.88h154.38c8.09,0,14.67,6.57,14.67,14.67v117.4h-182.12v-118.99c0-7.22,5.86-13.08,13.08-13.08Z"/>
                <path class="st1" d="M266.71,307.1s18.49,12.01,16.08,32.83h65.63v-32.83h-81.72Z"/>
                <path class="st1" d="M217.59,308.38c.05.05.04.11-.03.2-6.01,4.14-11.27,11.59-13.39,20.12-1.04,3.29-.76,7.85-2.08,9.6-2.13,2.5-7.67,1.35-11.06,1.62-3.22,0-6.52,0-9.7,0-3.31,0-5.62.06-7.85-1.69-2.98-2.25-6.57-5.33-7.87-8.75-1.01-2.85-.87-6.46-.89-9.83.09-3.31-.24-6.72.28-9.91.19-1.93,3.04-1.47,5.3-1.53,4.42,0,8.76,0,13.31,0,7.36,0,16.39,0,23.1,0,5.67.1,8.57-.21,10.87.15h.01Z"/>
                <path class="st1" d="M424.26,207.41c7.63,2.47,15.37,8.41,18.8,15.71,5.18,8.56,24.56,39.89,29.57,48.29,1.54,3.2.84,5.27,1.16,9.61.32,13.21.65,37.31.71,46.95.27,4.36-3.02,8.82-6.58,10.99-2.47,1.29-5.39.9-8.12.99-20.21.89-6.78-6.39-20.89-25.24-11.68-14.55-29.03-17.4-38.68-14.33-21.46,4.43-33.51,22.64-33.85,37.7-.05.61-.17,1.07-.8,1.35-1.3.57-4.74.59-6.52.23-1.03-.22-1.31-.62-1.32-1.32-.02-12.52-.01-120.53,0-131.63.03-1.06.16-1.26,1.52-1.29,14.51.27,35.26.73,51.37,1.07,4.37.25,10.03-.24,13.54.89l.09.03Z"/>
                <path class="st0" d="M376.14,226.28c-.17,8.17-.01,23-.06,31.51.05.7-.14.96.32,1,3.63,0,54.92,0,59.56,0,.53,0,.42-.03-.32-1.23-.23-.36-.43-.7-.68-1.08-4.45-6.84-11.58-19.08-14.31-22.44-2.29-2.73-6.96-5.88-10.58-6.96-9.23-2.69-31.04-1.04-33.91-.83v.02Z"/>
                <circle class="st1" cx="244.13" cy="339.92" r="31.68"/>
                <circle class="st0" cx="244.13" cy="339.92" r="17.98"/>
                <circle class="st1" cx="407.82" cy="339.92" r="31.68"/>
                <circle class="st0" cx="407.82" cy="339.92" r="17.98"/>
            </g>
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

.truck-svg {
    position: absolute;
    top: 53%;
    left: 49%;
    transform: translate(-50%, -50%);
    width: 97px;
    height: 99px;
    z-index: 2;
}

.st0 {
    fill: #f1c475;
}

.st1 {
    fill: #25282b;
}
</style>