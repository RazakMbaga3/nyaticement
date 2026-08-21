'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from '@/app/hooks/useTranslations';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface PostContent {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

interface FeaturedPost {
  id: string;
  en: PostContent;
  sw: PostContent;
  image: string;
  slug: string;
}

// Importing only the latest 3 posts for the homepage with bilingual support
const featuredPosts: FeaturedPost[] = [
  {
    id: 'understanding-cement-grades',
    en: {
      title: 'Understanding Cement Grades: Choosing the Right Nyati Cement for Your Project',
      excerpt: 'Learn how to select the perfect cement grade for your specific construction needs with our comprehensive guide.',
      date: 'March 28, 2025',
      category: 'Technical Knowledge',
      readTime: '3 Minute Read'
    },
    sw: {
      title: 'Kuelewa Daraja (Grade) za Saruji: Kuchagua Saruji ya Nyati Sahihi kwa Mradi Wako',
      excerpt: 'Jifunze jinsi ya kuchagua daraja kamili la saruji kwa mahitaji yako maalum ya ujenzi kupitia mwongozo wetu wa kina.',
      date: 'Machi 28, 2025',
      category: 'Ujuzi wa Kiufundi',
      readTime: '3 Dakika za Kusoma'
    },
    image: '/images/blog/understanding-cement-grades.jpg',
    slug: '/blog/understanding-cement-grades'
  },
  {
    id: 'monsoon-construction',
    en: {
      title: 'Monsoon Construction Guide: Building with Cement During Rainy Seasons',
      excerpt: 'Essential tips for ensuring quality construction during Tanzania\'s rainy seasons.',
      date: 'April 04, 2025',
      category: 'Construction Best Practices',
      readTime: '4 Minute Read'
    },
    sw: {
      title: 'Mwongozo wa Ujenzi kwa Saruji Wakati wa Misimu ya Mvua',
      excerpt: 'Vidokezo muhimu vya kuhakikisha ujenzi bora wakati wa misimu ya mvua ya Tanzania.',
      date: 'Aprili 04, 2025',
      category: 'Mbinu Bora za Ujenzi',
      readTime: '4 Dakika za Kusoma'
    },
    image: '/images/blog/monsoon.webp',
    slug: '/blog/monsoon-construction'
  },
  {
    id: 'infrastructure-boom',
    en: {
      title: 'Tanzania\'s Infrastructure Boom: The Role of Quality Cement in Nation Building',
      excerpt: 'Explore how quality cement is driving infrastructure development across Tanzania.',
      date: 'March 20, 2025',
      category: 'Industry Insights',
      readTime: '3 Minute Read'
    },
    sw: {
      title: 'Maendeleo ya Miundombinu ya Tanzania: Jukumu la Saruji Bora katika Ujenzi wa Taifa',
      excerpt: 'Chunguza jinsi saruji bora inavyoendesha maendeleo ya miundombinu nchini Tanzania.',
      date: 'Machi 20, 2025',
      category: 'Ufahamu wa Tasnia',
      readTime: '3 Dakika za Kusoma'
    },
    image: '/images/blog/nyereredam.webp',
    slug: '/blog/tanzania-infrastructure-boom'
  }
];

// Blog post categories with their respective colors
const categories = [
  {
    id: 'technical-knowledge',
    name: 'Technical Knowledge',
    color: 'bg-blue-100 text-blue-800',
  },
  {
    id: 'construction-best-practices',
    name: 'Construction Best Practices',
    color: 'bg-amber-100 text-amber-800',
  },
  {
    id: 'diy-home-building',
    name: 'DIY & Home Building',
    color: 'bg-green-100 text-green-800',
  },
  {
    id: 'sustainability-innovation',
    name: 'Sustainability & Innovation',
    color: 'bg-teal-100 text-teal-800',
  },
  {
    id: 'industry-insights',
    name: 'Industry Insights',
    color: 'bg-violet-100 text-violet-800',
  },
  {
    id: 'application-guides',
    name: 'Application Guides',
    color: 'bg-orange-100 text-orange-800',
  },
  {
    id: 'customer-spotlights',
    name: 'Customer Spotlights',
    color: 'bg-red-100 text-red-800',
  }
];

export default function BlogHighlights() {
  const { t } = useTranslations();
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-nyati-navy">{t('blog.title')}</h2>
          <p className="text-lg text-nyati-gray">{t('blog.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => {
            const postContent = language === 'en' ? post.en : post.sw;

            return (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={postContent.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${getCategoryColor(postContent.category)}`}>
                      {postContent.category}
                    </span>
                    <span className="ml-2 text-sm text-gray-500">{postContent.date}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-nyati-navy">
                    {postContent.title}
                  </h3>

                  <p className="text-gray-600 mb-4 flex-grow">{postContent.excerpt}</p>                  <div className="mt-auto">
                    <Link href={`${post.slug}?lang=${language}`} className="text-nyati-navy font-semibold hover:text-nyati-orange transition-colors inline-flex items-center">
                      {language === 'sw' ? 'Soma Zaidi' : 'Read More'}
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="/blog" className="inline-block px-6 py-3 bg-nyati-orange text-white font-medium rounded-md shadow hover:bg-nyati-orange-dark transition-colors">
            {t('common.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}

// Helper function to get the right category color
function getCategoryColor(category: string): string {
  // First try to find it in the predefined categories array
  const categoryItem = categories.find(cat => cat.name === category);
  if (categoryItem) {
    return categoryItem.color;
  }

  // Fallback to hardcoded mapping for specific categories
  const categoryMap: Record<string, string> = {
    'Technical Knowledge': 'bg-blue-100 text-blue-800',
    'Construction Best Practices': 'bg-amber-100 text-amber-800',
    'Industry Insights': 'bg-green-100 text-green-800'
  };

  return categoryMap[category] || 'bg-gray-100 text-gray-800';
}
