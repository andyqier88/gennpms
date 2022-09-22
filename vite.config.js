import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import viteSvgIcons from 'vite-plugin-svg-icons'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    vue(),

    //添加jsx/tsx支持
    vueJsx({}),

  ],

  resolve: {
    alias: {
        "@": resolve(__dirname, 'src'), // 路径别名
    },
    extensions: ['.js', '.vue', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
  },

  build: {
    //minify: false,
    commonjsOptions: {
      exclude: [
      ],
      include: []
    },
    rollupOptions: {
      // 指定生产打包入口文件为index.htm
      input: {
        main: resolve(__dirname, 'index.html'),
      },

      // // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
      //   // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue', //报错：Failed to resolve module specifier "vue". Relative references must start with either

        }
      }
    }
  }

})
