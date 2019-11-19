<template>
  <div class="container-box">
    <div class="container-box-head">
      <span>{{day}}</span>
    </div>
    <div class="container-box-notice">
      <div class="box-block-style">
        <div class="box-icon-style background-iconNotice"></div>
        <p>{{textNotice}}</p>
      </div>
      <span>{{timeNotice}}</span>
    </div>
    <div class="container-box-comment">
      <div class="box-block-style">
        <div class="box-icon-style background-iconComment"></div>
        <p>{{textComment}}</p>
      </div>
      <span>{{timeComment}}</span>
    </div>
    <div class="container-box-commentText">
      <p>{{textCommentT}}</p>
    </div>
    <div class="container-box-download">
      <div class="container-box-download-text">
        <div class="box-block-style">
          <div class="box-icon-style background-iconDownload"></div>
          <p>{{textDownload}}</p>    
        </div>
        <span>{{timeDownload}}</span>
      </div>
      <div class="container-box-download-img">
        <div class="imgBg" 
        v-for="(img, index) in imgs" 
        :class="img"
        :key="index"
        @click='$emit("imgClick", index)'
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      day: 'Today',
      textNotice: `Darika Samak mark as done Listing on 
                    Product Hunt so that we can reach as many potential users`,
      timeNotice: '8:40 PM',
      textComment: `Emilee Simchenko commented on Account for teams 
                    and personal in bottom style`,
      timeComment: '7:32 PM',
      textCommentT: `During a project build, it is necessary to evaluate 
                      the product design and development against project 
                      requirements and outcomes`,
      textDownload: `Darika Samak uploaded 4 files on An option to 
                      search in current projects or in all projects`,
      timeDownload: '6:02 PM',
      imgs: [
        "img1",
        "img2",
        "img3",
        "img4"
      ]
    }
  },
}
</script>
