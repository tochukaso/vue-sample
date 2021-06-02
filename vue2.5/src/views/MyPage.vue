<template>
  <div class="home">
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="primary"
      dark
    >
      <v-tab
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
      >
        <v-card flat>
          <v-card-text>{{ item.content }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>


    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="#6A76AB"
        dark
        scroll-target="#scrolling-techniques-3"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab id="user-info">会員情報</v-tab>
            <v-tab>注文履歴</v-tab>
            <v-tab>ポイント履歴</v-tab>
          </v-tabs>

          <v-tab-item id="user-info">
            <v-card>
              <v-card-text>
                タブ1の内容をここに記述します。もちろんこれは、あらかじめ Vue.js
                の data
                で定義しておいて、それを呼び出す形でも良いです。配列で格納しておいて、v-for
                で順番に取り出したりしても良さそうですね。
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card>
              <v-card-text>
                タブ2の内容をここに記述します。
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card>
              <v-card-text>
                タブ3の内容をここに記述します。
              </v-card-text>
            </v-card>
          </v-tab-item>
        </template>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-3"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1000px;"></v-container>
      </v-sheet>
    </v-card>
  </div>
</template>

<script>


  export default {
    data () {
      return {
        tab: null,
        items: [
          { tab: 'One', content: 'Tab 1 Content' },
          { tab: 'Two', content: 'Tab 2 Content' },
          { tab: 'Three', content: 'Tab 3 Content' },
        ],
      }
    },
  }
</script>
