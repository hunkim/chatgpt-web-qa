export interface SearchEngine {
  inputQuery: string[]
  sidebarContainerQuery: string[]
  appendContainerQuery: string[]
  watchRouteChange?: (callback: () => void) => void
}

export const config: Record<string, SearchEngine> = {
  google: {
    inputQuery: ["input[name='q']"],
    sidebarContainerQuery: ['#rhs'],
    appendContainerQuery: ['#rcnt'],
  },
  ohmynews: {
    inputQuery: ["[name='q']"],
    sidebarContainerQuery: ['#ctl00_dvWing'],

    appendContainerQuery: [],
  },

  arxiv: {
    inputQuery: ['#abs'],
    sidebarContainerQuery: ['div[class="submission-history"]'],

    appendContainerQuery: [],
  },

  medium: {
    inputQuery: ['#root'],
    sidebarContainerQuery: ['div[class="dh bf bk di"]'],

    appendContainerQuery: [],
  },
  jtbc: {
    inputQuery: ['#articlebody'],
    sidebarContainerQuery: ['#id_right_news_main'],
    appendContainerQuery: [],
  },
  daum: {
    inputQuery: ['#mArticle'],
    sidebarContainerQuery: ['div[data-cvdc-comp-name="toros_recommend_one_column"]'],
    appendContainerQuery: [],
  },
  bing: {
    inputQuery: ["[name='q']"],
    sidebarContainerQuery: ['#b_context'],
    appendContainerQuery: [],
  },
  yahoo: {
    inputQuery: ["input[name='p']"],
    sidebarContainerQuery: ['#right', '.Contents__inner.Contents__inner--sub'],
    appendContainerQuery: ['#cols', '#contents__wrap'],
  },
  duckduckgo: {
    inputQuery: ["input[name='q']"],
    sidebarContainerQuery: ['.results--sidebar.js-results-sidebar'],
    appendContainerQuery: ['#links_wrapper'],
  },
  baidu: {
    inputQuery: ["input[name='wd']"],
    sidebarContainerQuery: ['#content_right'],
    appendContainerQuery: ['#container'],
    watchRouteChange(callback) {
      const targetNode = document.getElementById('wrapper_wrapper')!
      const observer = new MutationObserver(function (records) {
        for (const record of records) {
          if (record.type === 'childList') {
            for (const node of record.addedNodes) {
              if ('id' in node && node.id === 'container') {
                callback()
                return
              }
            }
          }
        }
      })
      observer.observe(targetNode, { childList: true })
    },
  },
  kagi: {
    inputQuery: ["input[name='q']"],
    sidebarContainerQuery: ['.right-content-box._0_right_sidebar'],
    appendContainerQuery: ['#_0_app_content'],
  },
  yandex: {
    inputQuery: ["input[name='text']"],
    sidebarContainerQuery: ['#search-result-aside'],
    appendContainerQuery: [],
  },
  naver: {
    inputQuery: ['ct'],
    sidebarContainerQuery: ['#ct'],
    appendContainerQuery: ['#content'],
  },
  brave: {
    inputQuery: ["input[name='q']"],
    sidebarContainerQuery: ['#side-right'],
    appendContainerQuery: [],
  },
  searx: {
    inputQuery: ["input[name='q']"],
    sidebarContainerQuery: ['#sidebar_results'],
    appendContainerQuery: [],
  },
}
