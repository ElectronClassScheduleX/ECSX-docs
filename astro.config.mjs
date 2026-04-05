// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'ECSX 帮助文档',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Enigfrank/ElectronClassScheduleX' }],
          sidebar: [
              {
                  label: '文档',
                  items: [
                      { label: '帮助文档首页', slug: 'index' },
                  ],
              },
              {
                  label: 'ECSX',
                  items: [
                      { label: '快速入门', slug: 'ecs/quickstart' },
                      { label: '课表配置教程', slug: 'ecs/setschedule' },
                      { label: '功能介绍', slug: 'ecs/functionintroduction' },
                      { label: '软件更新', slug: 'ecs/update' },
                  ],
              },
          ],
      }),
	],

  adapter: vercel(),
});
