import { useHead, useSeoMeta } from '@unhead/vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import ogImage from '@/assets/images/header-bg.webp';

type Options = {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  type?: 'website';
  robots?: string[];
};

export const useAppMeta = ({ title, description, image, imageAlt, keywords, type = 'website', robots }: Options) => {
  const { t } = useI18n();
  const { currentRoute } = useRouter();
  // const { URL_FRONTEND: urlFrontend } = process.env;
  // console.log('env', process?.env);
  const urlFrontend = '';
  const defaultName = t('header.title') + ' • ' + t('header.specialization');

  const variables = {
    title: defaultName,
    description: t('header.description'),
    keywords: ['kamil grabowski', t('header.specialization')],
    robots: ['index', 'follow', 'all', 'noarchive', 'noodp'],
    image: ogImage,
    imageAlt: defaultName.toLowerCase(),
  };

  const state = {
    title: title || variables.title,
    description: description || variables.description,
    keywords: (keywords || variables.keywords).join(', '),
    robots: (robots || variables.robots).join(', '),
    image: image || variables.image,
    imageAlt: imageAlt || variables.imageAlt,
    type,
  };

  const canonical = `${urlFrontend}${currentRoute.value.fullPath}`;

  const head = useHead({
    link: [{ rel: 'canonical', href: canonical }],
    meta: [
      { name: 'application-name', content: defaultName },
      { name: 'robots', content: state.robots },
      { name: 'googlebot', content: 'noodp' },
    ],
  });

  const suffix = defaultName;

  const seo = useSeoMeta({
    title: state.title,
    titleTemplate: `%s • ${suffix}`,
    description: description || state.description,
    keywords: state.keywords,
    // facebook
    ogTitle: `${state.title} • ${suffix}`,
    ogDescription: state.description,
    ogSiteName: suffix,
    // ogTtl: 345600,
    ogUrl: canonical,
    ogType: state.type,
    ogImage: state.image,
    ogImageSecureUrl: state.image,
    ogImageAlt: state.imageAlt,
    fbAppId: '',
    // twitter
    twitterTitle: `${state.title} • ${suffix}`,
    twitterDescription: state.description,
    twitterImage: state.image,
    twitterSite: suffix,
    twitterCard: 'summary',
  });

  return {
    ...head,
    ...seo,
  };
};
