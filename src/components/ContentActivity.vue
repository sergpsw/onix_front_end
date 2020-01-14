<template lang="pug">
  .container-box
    .container-box-head
      span {{ activityDate }}
    .container-box-notice
      .box-block-style
        .box-icon-style.background-iconNotice
        p {{ ActivityBlock[0].text }}
      span {{ ActivityBlock[0].time }}
    .container-box-comment
      .box-block-style
        .box-icon-style.background-iconComment
        p {{ ActivityBlock[1].text }}
      span {{ ActivityBlock[1].time }}
    .container-box-commentText
      p {{ ActivityBlock[2].text }}
    .container-box-download
      .container-box-download-text
        .box-block-style
          .box-icon-style.background-iconDownload
          p {{ ActivityBlock[3].text }}
        span {{ ActivityBlock[3].time }}
      .container-box-download-img
        .imgBg(:style="{backgroundImage:'url('+require('../assets/img/'+img)+')'}"
              v-for="(img, index) in imgs"
              :key="index"
              @click="clickedImg(index)")
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { eventEmitter } from '../main';
import { IActivityBlock } from '@/types/activity';

@Component({
  name: 'ContentActivity',
})

export default class ContentActivity extends Vue {
  activityDate: string = 'Today';

  ActivityBlock: IActivityBlock[] = [
    {
      text: 'Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users',
      time: '8:40 PM',
    },
    {
      text: 'Emilee Simchenko commented on Account for teams and personal in bottom style',
      time: '7:32 PM',
    },
    {
      text: 'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes',
    },
    {
      text: 'Darika Samak uploaded 4 files on An option to search in current projects or in all projects',
      time: '6:02 PM',
    },
  ]

  imgs: string[] = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
  ];

  // eslint-disable-next-line
  clickedImg(index: number) {
    eventEmitter.$emit('clickedImg', index);
  }
}
</script>


<style scoped lang="less">
@color-bg_sidebar: #000;
@color-bg_cont: #fff;
.container-box {
  display: flex;
  flex-direction: column;
  width: max-content;
  height: min-content;
  background-color: @color-bg_cont;
  border-radius: 5px;
  align-items: center;
  margin: 1.8rem 0 1rem 0;
  padding-bottom: 1rem;
  &-head {
    width: 92%;
    margin: 1.5rem 0 0.8rem 0;
    font-size: 0.9rem;
    text-transform: uppercase;
    color: #131313;
    opacity: 0.5;
  }
  &-notice {
    display: flex;
    width: 92%;
    justify-content: space-between;
  }
  &-comment {
    display: flex;
    width: 92%;
    justify-content: space-between;
  }
  &-commentText {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    background-color: #F7F6F3;
    border-radius: 5px;
    p {
      width: 90%;
      font-size: 0.9rem;
    }
  }
  &-download {
    display: flex;
    width: 92%;
    flex-direction: column;
    &-text {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-img {
      display: flex;
      margin-left: 3.8rem;
      .imgBg {
        width: 6.2rem;
        height: 6.2rem;
        margin-right: 0.45rem;
        border-radius: 10%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
    }
  }
  .box-block-style {
    display: flex;
    width: 90%;
    align-items: center;
    p {
      width: 80%;
      margin-left: 1.2rem;
      font-size: 0.95rem;
    }
  }
  .box-icon-style {
    border-radius: 50%;
    border: none;
    width: 2.5rem;
    height: 2.5rem;
  }
  .background-iconNotice {
    background-color: #CEF9C6;
    background-image: url('../assets/img/Icon.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 35%;
  }
  .background-iconComment {
    background-color: #F7F6F3;
    background-image: url('../assets/img/icon_comm.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 35%;
  }
  .background-iconDownload {
    background-color: #E3EFFF;
    background-image: url('../assets/img/icon_download.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 35%;
  }
  span {
    align-self: flex-start;
    padding-top: 0.5rem;
    font-size: 0.8rem;
    opacity: 0.7;
  }
}
</style>
