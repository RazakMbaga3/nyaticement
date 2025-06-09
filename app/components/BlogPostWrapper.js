'use client'

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import BlogPost from './BlogPost';
import Image from 'next/image';
import Link from 'next/link';

// Blog post data with bilingual support
const blogPostsData = {
  'building-your-dream-home': {
    en: {
      title: "Building Your Dream Home with Nyati Cement: A Step-by-Step Guide",
      date: "April 3, 2025",
      category: "DIY & Home Building",
      readTime: "6 Minute Read",
      relatedPosts: [
        {
          title: 'Understanding Cement Grades: Choosing the Right Nyati Cement for Your Project',
          excerpt: 'Learn how to select the perfect cement grade for your specific construction needs with our comprehensive guide.',
          date: 'March 28, 2025',
          category: 'Technical Knowledge',
          slug: '/blog/understanding-cement-grades',
          readTime: '3 Minute Read'
        },
        {
          title: 'The Role of Water-Cement Ratio in Concrete Durability',
          excerpt: 'Discover how the water-cement ratio affects concrete strength, durability, and overall performance.',
          date: 'March 26, 2025',
          category: 'Technical Knowledge',
          slug: '/blog/water-cement-ratio',
          readTime: '2 Minute Read'
        }
      ],
      content: (
        <>
          <div className="relative h-96 w-full mb-8 rounded-sm overflow-hidden">
            <Image 
              src="/images/blog/home.webp" 
              alt="Home Construction" 
              fill 
              className="object-cover"
              priority
            />
          </div>

          <p className="lead">
            Building your own home is one of life's most rewarding achievements. With quality materials like Nyati Cement and careful planning, you can create a structure that will stand strong for generations. This comprehensive guide walks you through the essential steps of home building, with a focus on proper cement application for superior results.
          </p>

          <h2>1. Planning and Preparation</h2>
          
          <h3>Designing Your Home</h3>
          <p>Before any construction begins, you need a solid plan:</p>
          <ul>
            <li>Work with an architect to create detailed blueprints</li>
            <li>Secure all necessary building permits</li>
            <li>Establish a realistic budget and timeline</li>
            <li>Choose the right Nyati Cement products for each phase</li>
          </ul>

          <h3>Site Preparation</h3>
          <p>Proper site preparation sets the foundation for success:</p>
          <ul>
            <li>Clear the land of vegetation, debris, and obstacles</li>
            <li>Level the ground according to your building plans</li>
            <li>Mark the outline of the foundation with stakes and string</li>
            <li>Arrange for proper drainage away from the building site</li>
          </ul>

          <div className="relative h-64 w-full my-8 rounded-sm overflow-hidden">
            <Image 
              src="/images/blog/prep.jpeg" 
              alt="Site preparation for home construction" 
              fill 
              className="object-cover"
            />
          </div>

          <h2>2. Foundation Construction</h2>

          <div className="mr-4">
            <Link 
              href="/blog" 
              className="flex items-center text-nyati-navy hover:text-nyati-orange transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
          <div className="ml-auto">
            <Link 
              href="/products" 
              className="flex items-center text-nyati-navy hover:text-nyati-orange transition-colors"
            >
              Explore our cement products
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </>
      )
    },
    sw: {
      title: "Kujenga Nyumba ya Ndoto Yako kwa Saruji ya Nyati: Mwongozo wa Hatua kwa Hatua",
      date: "Aprili 3, 2025",
      category: "DIY & Ujenzi wa Nyumba",
      readTime: "6 Dakika za Kusoma",
      relatedPosts: [
        {
          title: 'Kuelewa Daraja  (Grade) za Saruji: Kuchagua Saruji ya Nyati Sahihi kwa Mradi Wako',
          excerpt: 'Jifunze jinsi ya kuchagua daraja kamili la saruji kwa mahitaji yako maalum ya ujenzi kupitia mwongozo wetu wa kina.',
          date: 'Machi 28, 2025',
          category: 'Ujuzi wa Kiufundi',
          slug: '/blog/understanding-cement-grades',
          readTime: '3 Dakika za Kusoma'
        },
        {
          title: 'Athari ya Uwiano wa Maji na Saruji katika Udhabiti wa Zege',
          excerpt: 'Gundua jinsi uwiano wa maji-saruji unavyoathiri nguvu ya zege, udhabiti, na utendaji wa jumla.',
          date: 'Machi 26, 2025',
          category: 'Ujuzi wa Kiufundi',
          slug: '/blog/water-cement-ratio',
          readTime: '2 Dakika za Kusoma'
        }
      ],
      content: (
        <>
          <div className="relative h-96 w-full mb-8 rounded-sm overflow-hidden">
            <Image 
              src="/images/blog/home.webp" 
              alt="Ujenzi wa Nyumba" 
              fill 
              className="object-cover"
              priority
            />
          </div>

          <p className="lead">
            Kujenga nyumba yako mwenyewe ni moja ya mafanikio yanayolipa zaidi maishani. Kwa vifaa vya ubora kama Saruji ya Nyati na mipango ya makini, unaweza kuunda muundo ambao utasimama imara kwa vizazi. Mwongozo huu wa kina unakupitisha hatua muhimu za ujenzi wa nyumba, kwa kuzingatia matumizi sahihi ya saruji kwa matokeo bora.
          </p>

          <h2>1. Upangaji na Maandalizi</h2>
          
          <h3>Kubuni Nyumba Yako</h3>
          <p>Kabla ya ujenzi wowote kuanza, unahitaji mpango thabiti:</p>
          <ul>
            <li>Fanya kazi na mhandisi wa ujenzi kuunda michoro ya kina</li>
            <li>Hakikisha vibali vyote muhimu vya ujenzi</li>
            <li>Unda bajeti na ratiba halisi</li>
            <li>Chagua bidhaa sahihi za Saruji ya Nyati kwa kila hatua</li>
          </ul>

          <h3>Maandalizi ya Eneo</h3>
          <p>Maandalizi sahihi ya eneo huweka msingi wa mafanikio:</p>
          <ul>
            <li>Safisha ardhi ya mimea, takataka, na vizuizi</li>
            <li>Sawazisha ardhi kulingana na mipango yako ya ujenzi</li>
            <li>Weka alama ya msingi kwa vigingi na kamba</li>
            <li>Panga mifereji sahihi mbali na eneo la ujenzi</li>
          </ul>

          <div className="relative h-64 w-full my-8 rounded-sm overflow-hidden">
            <Image 
              src="/images/blog/prep.jpeg" 
              alt="Maandalizi ya eneo la ujenzi wa nyumba" 
              fill 
              className="object-cover"
            />
          </div>

          <h2>2. Ujenzi wa Msingi</h2>

          <div className="mr-4">
            <Link 
              href="/blog" 
              className="flex items-center text-nyati-navy hover:text-nyati-orange transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Rudi kwenye Blogu
            </Link>
          </div>
          <div className="ml-auto">
            <Link 
              href="/products" 
              className="flex items-center text-nyati-navy hover:text-nyati-orange transition-colors"
            >
              Chunguza bidhaa zetu za saruji
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </>
      )
    }
  },
  'understanding-cement-grades': {
    en: {
      title: "Understanding Cement Grades: Choosing the Right Nyati Cement for Your Project",
      date: "March 28, 2025",
      category: "Technical Knowledge",
      readTime: "7 min read",
      relatedPosts: [
        {
          title: 'The Role of Water-Cement Ratio in Concrete Durability',
          excerpt: 'Discover how the water-cement ratio affects concrete strength, durability, and overall performance.',
          category: 'Technical Knowledge',
          date: 'March 26, 2025',
          readTime: '6 min read',
          slug: '/blog/water-cement-ratio'
        },
        {
          title: 'Why Compressive Strength Matters: Nyati Cement\'s Testing Standards',
          excerpt: 'Understand the importance of compressive strength testing and how Nyati ensures consistent quality.',
          category: 'Technical Knowledge',
          date: 'April 10, 2025',
          readTime: '5 min read',
          slug: '/blog/compressive-strength-testing'
        }
      ],
      content: (
        <>
          <p className="lead text-xl mb-6">
            When embarking on any construction project, selecting the appropriate cement grade is crucial for ensuring structural integrity, durability, and cost-effectiveness. Nyati Cement, manufactured by Lake Cement Ltd., offers multiple cement grades designed for specific applications. This guide will help you understand cement grades and select the right Nyati product for your construction needs.
          </p>

          <div className="my-8 rounded-sm overflow-hidden relative aspect-w-16 aspect-h-9 bg-gray-100">
            <div className="absolute inset-0 flex items-center justify-center bg-nyati-orange/10">
              <span className="text-nyati-orange font-bold">[Featured Image: Various cement grades being used in construction]</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">What Do Cement Grade Numbers Mean?</h2>
          <p>
            The numbers in cement grades (such as 32.5N or 42.5R) indicate the minimum compressive strength in megapascals (MPa) the cement will achieve after 28 days of curing. The letter indicates the rate of strength development:
          </p>
          <ul className="list-disc pl-6 mt-3 mb-6">
            <li><strong>N</strong> (Normal): Standard early strength development</li>
            <li><strong>R</strong> (Rapid): Higher early strength development</li>
          </ul>

          <div className="bg-nyati-cream p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold text-nyati-navy mb-3">Key Takeaway:</h3>
            <p className="italic">
              The higher the grade number, the stronger the final concrete will be. The "R" designation means the cement sets faster and gains strength earlier - ideal for projects with tight timelines.
            </p>
          </div>

          <div className="flex items-center mt-8 border-t border-gray-200 pt-8">
            <div className="mr-4">
              <Link 
                href="/blog" 
                className="flex items-center text-nyati-navy hover:text-nyati-orange transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>
            <div className="ml-auto">
              <Link 
                href="/contact" 
                className="flex items-center text-nyati-navy hover:text-nyati-orange transition-colors"
              >
                Have questions?
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </>
      )
    },
    sw: {
      title: "Kuelewa Daraja (Grade) za Saruji: Kuchagua Saruji ya Nyati Sahihi kwa Mradi Wako",
      date: "Machi 28, 2025",
      category: "Ujuzi wa Kiufundi",
      readTime: "7 dakika za kusoma",
      relatedPosts: [
        {
          title: 'Athari ya Uwiano wa Maji na Saruji katika Udhabiti wa Zege',
          excerpt: 'Gundua jinsi uwiano wa maji-saruji unavyoathiri nguvu ya zege, udhabiti, na utendaji wa jumla.',
          category: 'Ujuzi wa Kiufundi',
          date: 'Machi 26, 2025',
          readTime: '6 dakika za kusoma',
          slug: '/blog/water-cement-ratio'
        },
        {
          title: 'Kwanini Nguvu ya Shinikizo la Saruji ni Muhimu: Viwango vya Upimaji vya Saruji ya Nyati',
          excerpt: 'Elewa umuhimu wa upimaji wa nguvu za kushindilia na jinsi Nyati inavyohakikisha ubora endelevu.',
          category: 'Ujuzi wa Kiufundi',
          date: 'Aprili 10, 2025',
          readTime: '5 dakika za kusoma',
          slug: '/blog/compressive-strength-testing'
        }
      ],
      content: (
        <>
          <p className="lead text-xl mb-6">
            Unapoanza mradi wowote wa ujenzi, kuchagua daraja sahihi la saruji ni muhimu kwa kuhakikisha uadilifu wa muundo, udhabiti, na ufanisi wa gharama. Saruji ya Nyati, inayotengenezwa na Lake Cement Ltd., inatoa daraja nyingi za saruji zilizoundwa kwa matumizi maalum. Mwongozo huu utakusaidia kuelewa daraja za saruji na kuchagua bidhaa sahihi ya Nyati kwa mahitaji yako ya ujenzi.
          </p>

          <div className="my-8 rounded-sm overflow-hidden relative aspect-w-16 aspect-h-9 bg-gray-100">
            <div className="absolute inset-0 flex items-center justify-center bg-nyati-orange/10">
              <span className="text-nyati-orange font-bold">[Picha ya Sifa: Daraja mbalimbali za saruji zikitumika katika ujenzi]</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Namba za Daraja la Saruji Zina Maana Gani?</h2>
          <p>
            Namba katika daraja za saruji (kama vile 32.5N au 42.5R) zinaonyesha nguvu ya juu ya kushindilia katika megapascals (MPa) ambayo saruji itafikia baada ya siku 28 za kutiwa dawa. Herufi inaonyesha kiwango cha maendeleo ya nguvu:
          </p>
          <ul className="list-disc pl-6 mt-3 mb-6">
            <li><strong>N</strong> (Kawaida): Maendeleo ya kawaida ya nguvu za mapema</li>
            <li><strong>R</strong> (Haraka): Maendeleo ya juu ya nguvu za mapema</li>
          </ul>

          <div className="bg-nyati-cream p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold text-nyati-navy mb-3">Jambo Muhimu:</h3>
            <p className="italic">
              Jinsi namba ya daraja inavyozidi kuwa kubwa, ndivyo zege la mwisho litakavyokuwa imara zaidi. Alama ya "R" inamaanisha kuwa saruji inaganda haraka na kupata nguvu mapema - inafaa kwa miradi yenye ratiba za haraka.
            </p>
          </div>

          <div className="flex items-center mt-8 border-t border-gray-200 pt-8">
            <div className="mr-4">
              <Link 
                href="/blog" 
                className="flex items-center text-nyati-navy hover:text-nyati-orange transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Rudi kwenye Blogu
              </Link>
            </div>
            <div className="ml-auto">
              <Link 
                href="/contact" 
                className="flex items-center text-nyati-navy hover:text-nyati-orange transition-colors"
              >
                Una maswali?
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </>
      )
    }
  },
  'water-cement-ratio': {
    en: {
      title: "The Role of Water-Cement Ratio in Concrete Durability",
      date: "March 26, 2025",
      category: "Technical Knowledge",
      readTime: "6 min read",
      relatedPosts: [
        {
          title: 'Understanding Cement Grades: Choosing the Right Nyati Cement for Your Project',
          excerpt: 'Learn how to select the perfect cement grade for your specific construction needs with our comprehensive guide.',
          category: 'Technical Knowledge',
          date: 'March 28, 2025',
          readTime: '7 min read',
          slug: '/blog/understanding-cement-grades'
        },
        {
          title: 'Understanding Concrete Curing: Best Practices for Maximum Strength',
          excerpt: 'Learn proper concrete curing techniques to maximize strength and durability in your construction projects.',
          category: 'Construction Best Practices',
          date: 'April 15, 2025',
          readTime: '6 min read',
          slug: '/blog/concrete-curing'
        }
      ]
    },
    sw: {
      title: "Athari ya Uwiano wa Maji na Saruji katika Udhabiti wa Zege",
      date: "Machi 26, 2025",
      category: "Ujuzi wa Kiufundi",
      readTime: "6 dakika za kusoma",
      relatedPosts: [
        {
          title: 'Kuelewa Daraja (Grade) za Saruji: Kuchagua Saruji ya Nyati Sahihi kwa Mradi Wako',
          excerpt: 'Jifunze jinsi ya kuchagua daraja la saruji sahihi kwa mahitaji yako maalum ya ujenzi.',
          category: 'Ujuzi wa Kiufundi',
          date: 'Machi 28, 2025',
          readTime: '7 dakika za kusoma',
          slug: '/blog/understanding-cement-grades'
        },
        {
          title: 'Kuelewa Kutibu Zege: Mbinu Bora kwa Nguvu ya Juu',
          excerpt: 'Jifunze mbinu sahihi za kutibu zege ili kuongeza nguvu na udhabiti katika miradi yako ya ujenzi.',
          category: 'Mbinu Bora za Ujenzi',
          date: 'Aprili 15, 2025',
          readTime: '6 dakika za kusoma',
          slug: '/blog/concrete-curing'
        }
      ]
    }
  },
  'concrete-curing': {
    en: {
      title: "Understanding Concrete Curing: Best Practices for Maximum Strength",
      date: "April 15, 2025",
      category: "Construction Best Practices",
      readTime: "6 min read",
      relatedPosts: [
        {
          title: 'The Role of Water-Cement Ratio in Concrete Durability',
          excerpt: 'Discover how the water-cement ratio affects concrete strength, durability, and overall performance.',
          category: 'Technical Knowledge',
          date: 'March 26, 2025',
          readTime: '6 min read',
          slug: '/blog/water-cement-ratio'
        },
        {
          title: 'Monsoon Construction Guide: Building with Cement During Rainy Seasons',
          excerpt: 'Essential tips for ensuring quality construction during Tanzania\'s rainy seasons.',
          category: 'Construction Best Practices',
          date: 'April 25, 2025',
          readTime: '9 min read',
          slug: '/blog/monsoon-construction'
        }
      ],
      content: (
        <>
          <div className="relative h-96 w-full mb-8 rounded-sm overflow-hidden">
            <Image 
              src="/images/blog/concrete-curing.webp" 
              alt="Concrete curing process" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          
          <p className="lead">
            Proper concrete curing is one of the most critical yet often overlooked aspects of construction. The curing process directly impacts the final strength, durability, and overall performance of concrete structures. This guide explores best practices for concrete curing using Nyati Cement products to achieve maximum strength and longevity.
          </p>
          
          <h2>What is Concrete Curing?</h2>
          <p>
            Curing is the process of maintaining adequate moisture and temperature conditions in concrete for a period of time immediately following placement. This allows the cement to hydrate properly, developing its full strength potential and reducing the risk of cracking.
          </p>
          
          <h2>Why Proper Curing is Essential</h2>
          <p>
            When concrete is not properly cured, several problems can occur:
          </p>
          <ul>
            <li>Reduced compressive strength (up to 40-60% loss)</li>
            <li>Increased permeability, leading to water penetration</li>
            <li>Poor abrasion resistance</li>
            <li>Increased cracking due to plastic shrinkage</li>
            <li>Reduced durability against weather and chemical exposure</li>
          </ul>
          
          <h2>Optimal Curing Methods for Nyati Cement Products</h2>
          
          <h3>1. Water Curing</h3>
          <p>
            Water curing is the most effective method for Nyati Cement concrete. It involves keeping the concrete continuously wet for the curing period.
          </p>
          <ul>
            <li><strong>Ponding:</strong> For horizontal surfaces, create small dams around the perimeter and fill with water.</li>
            <li><strong>Spraying:</strong> Regularly spray water on vertical surfaces.</li>
            <li><strong>Wet coverings:</strong> Use burlap, cotton mats, or sand that is kept continuously moist.</li>
          </ul>
          
          <div className="bg-gray-100 p-4 rounded-sm my-6">
            <p className="font-bold text-nyati-navy mb-2">Pro Tip:</p>
            <p>For Nyati Cement 42.5N and 42.5R products, water curing for a minimum of 7 days produces optimal results, especially in hot climates.</p>
          </div>
          
          <h3>2. Membrane Curing</h3>
          <p>
            This involves applying a liquid membrane-forming compound that creates a barrier to reduce water evaporation.
          </p>
          <ul>
            <li>Apply evenly over the entire concrete surface</li>
            <li>Particularly useful for vertical surfaces where water curing is difficult</li>
            <li>Ensure complete coverage with no missed spots</li>
          </ul>
          
          <h3>3. Steam Curing</h3>
          <p>
            For precast concrete elements using Nyati Cement, steam curing can accelerate strength development.
          </p>
          <ul>
            <li>Maintain 100% relative humidity</li>
            <li>Control temperature rise (typically not exceeding 20°C per hour)</li>
            <li>Maximum curing temperature of 60-70°C for best results</li>
          </ul>
        </>
      )
    },
    sw: {
      title: "Kuelewa Kutibu Zege: Mbinu Bora kwa Nguvu ya Juu",
      date: "Aprili 15, 2025",
      category: "Mbinu Bora za Ujenzi",
      readTime: "6 dakika za kusoma",
      relatedPosts: [
        {
          title: 'Athari ya Uwiano wa Maji na Saruji katika Udhabiti wa Zege',
          excerpt: 'Gundua jinsi uwiano wa maji-saruji unavyoathiri nguvu ya zege, udhabiti, na utendaji wa jumla.',
          category: 'Ujuzi wa Kiufundi',
          date: 'Machi 26, 2025',
          readTime: '6 dakika za kusoma',
          slug: '/blog/water-cement-ratio'
        },
        {
          title: 'Mwongozo wa Ujenzi wa Masika: Kujenga kwa Saruji Wakati wa Msimu wa Mvua',
          excerpt: 'Vidokezo muhimu kwa ujenzi bora wakati wa masika Tanzania.',
          category: 'Mbinu Bora za Ujenzi',
          date: 'Aprili 25, 2025',
          readTime: '9 dakika za kusoma',
          slug: '/blog/monsoon-construction'
        }
      ],
      content: (
        <>
          <div className="relative h-96 w-full mb-8 rounded-sm overflow-hidden">
            <Image 
              src="/images/blog/concrete-curing.webp" 
              alt="Mchakato wa kutibu zege" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          
          <p className="lead">
            Kutibu zege ipasavyo ni moja ya vipengele muhimu zaidi lakini mara nyingi huachwa katika ujenzi. Mchakato wa kutibu unaathiri moja kwa moja nguvu ya mwisho, udhabiti, na utendaji wa jumla wa miundo ya zege. Mwongozo huu unachunguza mbinu bora za kutibu zege ukitumia bidhaa za Saruji ya Nyati ili kupata nguvu na maisha marefu.
          </p>
          
          <h2>Kutibu Zege ni Nini?</h2>
          <p>
            Kutibu ni mchakato wa kudumisha unyevu na hali ya joto katika zege kwa muda mara tu baada ya kuwekwa. Hii huruhusu saruji kuhidrati ipasavyo, kukuza uwezo wake kamili wa nguvu na kupunguza hatari ya kupasuka.
          </p>
          
          <h2>Kwa Nini Kutibu Ipasavyo ni Muhimu</h2>
          <p>
            Wakati zege haitiliwi ipasavyo, matatizo kadhaa yanaweza kutokea:
          </p>
          <ul>
            <li>Nguvu ya ushindiliaji iliyopunguzwa (hadi 40-60% upotezaji)</li>
            <li>Upenya uliongezeka, unaoongoza kwa maji kupenya</li>
            <li>Upinzani duni wa kusugua</li>
            <li>Kupasuka kulikoongezeka kutokana na kujikunja kwa plastiki</li>
            <li>Udhabiti uliopungua dhidi ya hali ya hewa na kemikali</li>
          </ul>
          
          <h2>Mbinu Bora za Kutibu kwa Bidhaa za Saruji ya Nyati</h2>
          
          <h3>1. Kutibu kwa Maji</h3>
          <p>
            Kutibu kwa maji ni njia bora zaidi kwa zege ya Saruji ya Nyati. Inahusisha kuweka zege ikiwa na unyevu mfululizo kwa kipindi cha kutibu.
          </p>
          <ul>
            <li><strong>Kufurika:</strong> Kwa nyuso za mlalo, unda mabwawa madogo kuzunguka mzunguko na ujaze maji.</li>
            <li><strong>Kunyunyizia:</strong> Nyunyizia maji mara kwa mara kwenye nyuso wima.</li>
            <li><strong>Vifuniko vyenye unyevu:</strong> Tumia gunia, mikeka ya pamba, au mchanga unaoekwa na unyevu mfululizo.</li>
          </ul>
          
          <div className="bg-gray-100 p-4 rounded-sm my-6">
            <p className="font-bold text-nyati-navy mb-2">Dokezo la Mtaalamu:</p>
            <p>Kwa bidhaa za Saruji ya Nyati 42.5N na 42.5R, kutibu kwa maji kwa angalau siku 7 hutoa matokeo bora, hasa katika hali ya hewa ya joto.</p>
          </div>
          
          <h3>2. Kutibu kwa Kiwambo</h3>
          <p>
            Hii inahusisha kutumia kiambata chenye umbo la kiwambo cha maji ambayo huunda kizuizi kupunguza uvukaji wa maji.
          </p>
          <ul>
            <li>Tumia kwa usawa kwenye uso wote wa zege</li>
            <li>Hasa muhimu kwa nyuso wima ambapo kutibu kwa maji ni ngumu</li>
            <li>Hakikisha kufunika kikamilifu bila sehemu zilizoachwa</li>
          </ul>
          
          <h3>3. Kutibu kwa Mvuke</h3>
          <p>
            Kwa vipengele vya zege vilivyoundwa awali ukitumia Saruji ya Nyati, kutibu kwa mvuke kunaweza kuharakisha ukuzaji wa nguvu.
          </p>
          <ul>
            <li>Dumisha unyevu wa asilimia 100</li>
            <li>Dhibiti ongezeko la joto (kwa kawaida halizidi nyuzi 20 kwa saa)</li>
            <li>Joto la juu la kutibu la nyuzi 60-70 kwa matokeo bora</li>
          </ul>
        </>
      )
    }
  },
  'compressive-strength-testing': {
    en: {
      title: "Why Compressive Strength Matters: Nyati Cement's Testing Standards",
      date: "April 10, 2025",
      category: "Technical Knowledge",
      readTime: "5 min read",
      relatedPosts: [
        {
          title: 'Understanding Cement Grades',
          excerpt: 'Learn how to select the perfect cement grade for your specific construction needs.',
          category: 'Technical Knowledge',
          date: 'March 28, 2025',
          readTime: '7 min read',
          slug: '/blog/understanding-cement-grades'
        },
        {
          title: 'The Role of Water-Cement Ratio in Concrete Durability',
          excerpt: 'How water content affects concrete strength and durability.',
          category: 'Technical Knowledge',
          date: 'March 26, 2025',
          readTime: '6 min read',
          slug: '/blog/water-cement-ratio'
        }
      ],
      content: (
        <>
          <div className="relative h-96 w-full mb-8 rounded-sm overflow-hidden">
            <Image 
              src="/images/blog/compressive-strength.webp" 
              alt="Compressive strength testing equipment" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          
          <p className="lead">
            Compressive strength is the most critical property of cement and concrete, determining how well a structure can withstand loads without failing. At Nyati Cement, rigorous testing ensures our products consistently meet or exceed industry standards. This article explains why compressive strength matters and how we test for it.
          </p>
          
          <h2>What is Compressive Strength?</h2>
          <p>
            Compressive strength is the maximum load a material can bear before failing under compression. For cement and concrete, it's typically measured in Megapascals (MPa) or pounds per square inch (psi) and tested at specific intervals (usually 3, 7, and 28 days after casting).
          </p>
          
          <h2>Why Compressive Strength Matters</h2>
          
          <h3>1. Structural Safety</h3>
          <p>
            The primary purpose of testing compressive strength is to ensure structural safety. Buildings, bridges, and other structures must withstand their intended loads with an appropriate safety margin.
          </p>
          
          <h3>2. Durability Indicator</h3>
          <p>
            Higher compressive strength generally correlates with improved durability properties:
          </p>
          <ul>
            <li>Better resistance to weathering</li>
            <li>Reduced permeability</li>
            <li>Improved resistance to chemical attack</li>
            <li>Enhanced abrasion resistance</li>
          </ul>
          
          <h3>3. Economic Implications</h3>
          <p>
            Consistent and predictable strength development allows for:
          </p>
          <ul>
            <li>Optimal material usage</li>
            <li>Accurate project scheduling</li>
            <li>Faster construction timelines (formwork removal, prestressing, etc.)</li>
            <li>Reduced maintenance costs over the structure's lifetime</li>
          </ul>
          
          <h2>Nyati Cement's Testing Protocols</h2>
          
          <p>
            Our state-of-the-art testing laboratory follows international standards to ensure consistent quality:
          </p>
          
          <h3>1. Sample Preparation</h3>
          <p>
            We prepare mortar samples using a precisely controlled mixture of cement, standard sand, and water according to EN 196-1 or equivalent standards. The samples are cast into 40mm × 40mm × 160mm prism molds under controlled conditions.
          </p>
          
          <h3>2. Curing Protocol</h3>
          <p>
            The samples are initially cured in their molds at 20±1°C and {'>'}90% relative humidity for 24 hours. After demolding, they're cured in water at 20±1°C until the testing age.
          </p>
          
          <h3>3. Testing Procedure</h3>
          <p>
            The prisms are first tested for flexural strength, then the resulting halves are tested for compressive strength using calibrated compression testing machines. The load is applied at a controlled rate until failure occurs.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-sm my-6">
            <p className="font-bold text-nyati-navy mb-2">Quality Assurance:</p>
            <p>Every batch of Nyati Cement undergoes testing at 3, 7, and 28 days. Only products that meet our strict standards reach the market.</p>
          </div>
        </>
      )
    },
    sw: {
      title: "Kwanini Nguvu ya Shinikizo la Saruji ni Muhimu: Viwango vya Upimaji vya Saruji ya Nyati",
      date: "Aprili 10, 2025",
      category: "Ujuzi wa Kiufundi",
      readTime: "5 dakika za kusoma",
      relatedPosts: [
        {
          title: 'Kuelewa Daraja za Saruji',
          excerpt: 'Jifunze jinsi ya kuchagua daraja la saruji sahihi kwa mahitaji yako maalum ya ujenzi.',
          category: 'Ujuzi wa Kiufundi',
          date: 'Machi 28, 2025',
          readTime: '7 dakika za kusoma',
          slug: '/blog/understanding-cement-grades'
        },
        {
          title: 'Athari ya Uwiano wa Maji na Saruji katika Udhabiti wa Zege',
          excerpt: 'Jinsi kiasi cha maji kinavyoathiri nguvu na udhabiti wa zege.',
          category: 'Ujuzi wa Kiufundi',
          date: 'Machi 26, 2025',
          readTime: '6 dakika za kusoma',
          slug: '/blog/water-cement-ratio'
        }
      ],
      content: (
        <>
          <div className="relative h-96 w-full mb-8 rounded-sm overflow-hidden">
            <Image 
              src="/images/blog/compressive-strength.webp" 
              alt="Vifaa vya kupima nguvu ya kushindilia" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          
          <p className="lead">
            Nguvu ya kushindilia ni sifa muhimu zaidi ya saruji na zege, ikiamuwa jinsi muundo unavyoweza kuhimili mizigo bila kushindwa. Katika Saruji ya Nyati, upimaji mkali unahakikisha bidhaa zetu zinatimiza au kuzidi viwango vya tasnia. Makala hii inaeleza kwa nini nguvu ya kushindilia ni muhimu na jinsi tunavyoipima.
          </p>
          
          <h2>Nguvu ya Kushindilia ni Nini?</h2>
          <p>
            Nguvu ya kushindilia ni mzigo wa juu zaidi ambao nyenzo inaweza kubeba kabla ya kushindwa chini ya shinikizo. Kwa saruji na zege, kwa kawaida inapimwa katika Megapascals (MPa) au pauni kwa inchi ya mraba (psi) na kupimwa kwa vipindi maalum (kawaida siku 3, 7, na 28 baada ya kusubu).
          </p>
          
          <h2>Kwa Nini Nguvu ya Kushindilia ni Muhimu</h2>
          
          <h3>1. Usalama wa Muundo</h3>
          <p>
            Lengo kuu la kupima nguvu ya kushindilia ni kuhakikisha usalama wa muundo. Majengo, madaraja, na miundo mingine lazima ihimili mizigo iliyokusudiwa na kiwango cha usalama kinachofaa.
          </p>
          
          <h3>2. Kiashiria cha Udhabiti</h3>
          <p>
            Nguvu ya juu ya kushindilia kwa ujumla inahusiana na sifa zilizoimarishwa za udhabiti:
          </p>
          <ul>
            <li>Upinzani bora kwa hali ya hewa</li>
            <li>Upenya uliopunguzwa</li>
            <li>Upinzani ulioimarishwa kwa mashambulizi ya kemikali</li>
            <li>Upinzani ulioimarishwa wa kusugua</li>
          </ul>
          
          <h3>3. Athari za Kiuchumi</h3>
          <p>
            Maendeleo ya nguvu yenye uthabiti na yanayotabirika huruhusu:
          </p>
          <ul>
            <li>Matumizi bora ya vifaa</li>
            <li>Upangaji sahihi wa mradi</li>
            <li>Ratiba za haraka za ujenzi (kuondoa fremu, kuvuta kabla, n.k.)</li>
            <li>Kupunguza gharama za matengenezo katika maisha ya muundo</li>
          </ul>
          
          <h2>Itifaki za Upimaji za Saruji ya Nyati</h2>
          
          <p>
            Maabara yetu ya upimaji ya kisasa inafuata viwango vya kimataifa kuhakikisha ubora endelevu:
          </p>
          
          <h3>1. Maandalizi ya Sampuli</h3>
          <p>
            Tunaandaa sampuli za mota kwa kutumia mchanganyiko uliodhibitiwa kwa usahihi wa saruji, mchanga wa kiwango, na maji kulingana na EN 196-1 au viwango sawa. Sampuli zinasubiwa katika vyombo vya prism vya 40mm × 40mm × 160mm chini ya hali inayodhibitiwa.
          </p>
          
          <h3>2. Itifaki ya Kutibu</h3>
          <p>
            Sampuli mwanzoni zinatibiwa katika vyombo vyao katika joto la 20±1°C na unyevu wa asilimia {'>'}90 kwa saa 24. Baada ya kuondoa vyombo, zinatibiwa katika maji katika joto la 20±1°C hadi umri wa kupima.
          </p>
          
          <h3>3. Utaratibu wa Upimaji</h3>
          <p>
            Prism kwanza zinapimwa kwa nguvu ya kukunja, kisha nusu zinazotokana na hizo zinapimwa kwa nguvu ya kushindilia kwa kutumia mashine za kupima shinikizo zilizoratibiwa. Mzigo unatumika kwa kiwango kinachdhibitiwa hadi kushindwa kutokee.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-sm my-6">
            <p className="font-bold text-nyati-navy mb-2">Uhakikisho wa Ubora:</p>
            <p>Kila fungu la Saruji ya Nyati linapitia upimaji katika siku 3, 7, na 28. Ni bidhaa ambazo zinatimiza viwango vyetu vikali tu zinazofikia soko.</p>
          </div>
        </>
      )
    }
  },
  'monsoon-construction': {
    en: {
      title: "Monsoon Construction Guide: Building with Cement During Rainy Seasons",
      date: "April 25, 2025",
      category: "Construction Best Practices",
      readTime: "9 min read",
      relatedPosts: [
        {
          title: 'Understanding Concrete Curing: Best Practices for Maximum Strength',
          excerpt: 'Master the art of proper concrete curing to achieve optimal strength and durability in your construction projects.',
          category: 'Construction Best Practices',
          date: 'April 15, 2025',
          readTime: '6 min read',
          slug: '/blog/concrete-curing'
        },
        {
          title: 'Building for Water Resistance: Cement Applications in Hydraulic Structures',
          excerpt: 'Specialized techniques and cement recommendations for dams, water tanks, and other hydraulic projects.',
          category: 'Application Guides',
          date: 'Coming Soon',
          readTime: '8 min read',
          slug: '#'
        }
      ],
      content: (
        <>
          <div className="relative h-96 w-full mb-8 rounded-sm overflow-hidden">
            <Image 
              src="/images/blog/monsoon.webp" 
              alt="Construction site during rainy season" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          
          <p className="lead">
            Tanzania's rainy seasons present unique challenges for construction projects. Heavy rainfall, high humidity, and water saturation can significantly impact cement performance and overall build quality. This comprehensive guide provides essential strategies for successful construction with Nyati Cement during monsoon conditions.
          </p>
          
          <h2>Understanding the Challenges</h2>
          
          <p>
            Rainy season construction faces several obstacles:
          </p>
          
          <ul>
            <li><strong>Excess moisture:</strong> Adds water to concrete mixes, affecting strength</li>
            <li><strong>Slower setting and curing:</strong> High humidity delays cement hardening</li>
            <li><strong>Water accumulation:</strong> Creates foundation problems and excavation difficulties</li>
            <li><strong>Increased efflorescence:</strong> White salt deposits appear on concrete surfaces</li>
            <li><strong>Material storage issues:</strong> Cement and aggregates are vulnerable to moisture</li>
          </ul>
          
          <h2>Pre-Construction Planning</h2>
          
          <h3>Site Assessment and Preparation</h3>
          <p>
            Before construction begins, thorough site preparation is essential:
          </p>
          
          <ul>
            <li>Install effective drainage systems to divert water away from construction areas</li>
            <li>Create elevated platforms for material storage (at least 30cm above ground)</li>
            <li>Build temporary shelters with proper roofing and side covers</li>
            <li>Prepare adequate water pumps to remove accumulated water</li>
            <li>Schedule critical cement work during forecasted dry periods</li>
          </ul>
          
          <div className="bg-gray-100 p-4 rounded-sm my-6">
            <p className="font-bold text-nyati-navy mb-2">Expert Tip:</p>
            <p>For foundations, consider using Nyati Cement 42.5R, which offers faster setting time and higher early strength – ideal for making the most of dry intervals between rains.</p>
          </div>
          
          <h2>Material Storage and Handling</h2>
          
          <h3>Protecting Cement and Aggregates</h3>
          <p>
            Proper storage is critical during monsoon construction:
          </p>
          
          <ul>
            <li>Store cement bags on wooden pallets in waterproof warehouses</li>
            <li>Stack bags away from walls to prevent moisture absorption</li>
            <li>Limit cement storage time to a maximum of 4-6 weeks during rainy seasons</li>
            <li>Cover sand and aggregate piles with waterproof tarpaulins</li>
            <li>Use aggregates only after excess surface moisture has drained</li>
          </ul>
          
          <h3>First-In, First-Out Inventory</h3>
          <p>
            Implement a strict first-in, first-out policy for cement usage to minimize the risk of using partially hydrated cement from prolonged storage.
          </p>
        </>
      )
    },
    sw: {
      title: "Mwongozo wa Ujenzi wa Masika: Kujenga kwa Saruji Wakati wa Msimu wa Mvua",
      date: "Aprili 25, 2025",
      category: "Mbinu Bora za Ujenzi",
      readTime: "9 dakika za kusoma",
      relatedPosts: [
        {
          title: 'Kuelewa Kutibu Zege: Mbinu Bora kwa Nguvu ya Juu',
          excerpt: 'Kuwa mtaalamu wa mbinu sahihi za kutibu zege ili kupata nguvu na udhabiti bora katika miradi yako ya ujenzi.',
          category: 'Mbinu Bora za Ujenzi',
          date: 'Aprili 15, 2025',
          readTime: '6 dakika za kusoma',
          slug: '/blog/concrete-curing'
        },
        {
          title: 'Kujenga kwa Usugu wa Maji: Matumizi ya Saruji katika Miundo ya Hydrauliki',
          excerpt: 'Mbinu maalum na mapendekezo ya saruji kwa mabwawa, matanki ya maji, na miradi mingine ya hydrauliki.',
          category: 'Miongozo ya Matumizi',
          date: 'Inakuja Hivi Karibuni',
          readTime: '8 dakika za kusoma',
          slug: '#'
        }
      ],
      content: (
        <>
          <div className="relative h-96 w-full mb-8 rounded-sm overflow-hidden">
            <Image 
              src="/images/blog/monsoon.webp" 
              alt="Eneo la ujenzi wakati wa msimu wa mvua" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          
          <p className="lead">
            Misimu ya mvua ya Tanzania inaleta changamoto za kipekee kwa miradi ya ujenzi. Mvua kubwa, unyevu wa juu, na usaturesheni wa maji inaweza kuathiri sana utendaji wa saruji na ubora wa jumla wa ujenzi. Mwongozo huu kamili unatoa mikakati muhimu kwa ujenzi wenye mafanikio na Saruji ya Nyati wakati wa hali ya masika.
          </p>
          
          <h2>Kuelewa Changamoto</h2>
          
          <p>
            Ujenzi wa msimu wa mvua unakabiliwa na vikwazo kadhaa:
          </p>
          
          <ul>
            <li><strong>Unyevu wa ziada:</strong> Huongeza maji kwenye mchanganyiko wa zege, kuathiri nguvu</li>
            <li><strong>Kuweka na kutibu polepole:</strong> Unyevu wa juu huchelewa ugandishaji wa saruji</li>
            <li><strong>Mkusanyiko wa maji:</strong> Husababisha matatizo ya msingi na ugumu wa uchimbaji</li>
            <li><strong>Efflorescence iliyoongezeka:</strong> Machafu meupe ya chumvi huonekana kwenye uso wa zege</li>
            <li><strong>Matatizo ya kuhifadhi vifaa:</strong> Saruji na mabomba ni hatarini kwa unyevu</li>
          </ul>
          
          <h2>Upangaji wa Kabla ya Ujenzi</h2>
          
          <h3>Tathmini na Maandalizi ya Eneo</h3>
          <p>
            Kabla ya ujenzi kuanza, maandalizi ya kina ya eneo ni muhimu:
          </p>
          
          <ul>
            <li>Weka mifumo madhubuti ya mifereji kuelekezea maji mbali na maeneo ya ujenzi</li>
            <li>Unda jukwaa lililoinuliwa kwa kuhifadhi vifaa (angalau sentimita 30 juu ya ardhi)</li>
            <li>Jenga makazi ya muda na paa sahihi na vifuniko vya pembeni</li>
            <li>Andaa pampu za kutosha za maji kuondoa maji yaliyokusanyika</li>
            <li>Panga kazi muhimu za saruji wakati wa vipindi vilivyotabirika kuwa vikavu</li>
          </ul>
          
          <div className="bg-gray-100 p-4 rounded-sm my-6">
            <p className="font-bold text-nyati-navy mb-2">Dokezo la Mtaalamu:</p>
            <p>Kwa misingi, fikiria kutumia Saruji ya Nyati 42.5R, ambayo inatoa muda wa haraka wa kuweka na nguvu za awali za juu - nzuri kwa kufanya muda wa kavu kati ya mvua.</p>
          </div>
          
          <h2>Uhifadhi na Utunzaji wa Vifaa</h2>
          
          <h3>Kulinda Saruji na Mabomba</h3>
          <p>
            Uhifadhi sahihi ni muhimu wakati wa ujenzi wa masika:
          </p>
          
          <ul>
            <li>Hifadhi mifuko ya saruji kwenye paleti za mbao katika maghala isiyopitisha maji</li>
            <li>Panga mifuko mbali na kuta kuzuia ufyonzaji wa unyevu</li>
            <li>Punguza muda wa kuhifadhi saruji hadi wiki 4-6 wakati wa misimu ya mvua</li>
            <li>Funika marundo ya mchanga na mabomba na turubai zisizopitisha maji</li>
            <li>Tumia mabomba tu baada ya unyevu wa uso wa ziada kufaa</li>
          </ul>
          
          <h3>Hesabu ya Kwanza-Kuingia, Kwanza-Kutoka</h3>
          <p>
            Tekeleza sera kali ya kwanza-kuingia, kwanza-kutoka kwa matumizi ya saruji kupunguza hatari ya kutumia saruji iliyohidrati kiasi kutokana na uhifadhi wa muda mrefu.
          </p>
        </>
      )
    },
    sw: {
      title: "Mapinduzi ya Miundombinu ya Tanzania: Jukumu la Saruji Bora",
      date: "Mei 5, 2025",
      category: "Maono ya Sekta",
      readTime: "8 dakika za kusoma",
      relatedPosts: [
        {
          title: 'Uchumi wa Saruji Bora: Thamani ya Muda Mrefu dhidi ya Gharama ya Awali',
          excerpt: 'Kwa nini kuwekeza katika saruji bora hutoa thamani bora zaidi katika maisha ya mradi wako wa ujenzi.',
          category: 'Maono ya Sekta',
          date: 'Inakuja Hivi Karibuni',
          readTime: '8 dakika za kusoma',
          slug: '#'
        },
        {
          title: 'Mafanikio ya Vifaa vya Ndani: Jinsi Vifaa 100% vya Tanzania Huongeza Ubora wa Saruji ya Nyati',
          excerpt: 'Gundua jinsi ahadi yetu ya kutumia vifaa vya ndani inavyofaidisha ubora wa bidhaa na uchumi wa Tanzania.',
          category: 'Uendelevu & Ubunifu',
          date: 'Inakuja Hivi Karibuni',
          readTime: '7 dakika za kusoma',
          slug: '#'
        }
      ],
      content: (
        <>
          <div className="relative h-96 w-full mb-8 rounded-sm overflow-hidden">
            <Image 
              src="/images/blog/infrastructure.webp" 
              alt="Mradi wa kisasa wa miundombinu Tanzania" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          
          <p className="lead">
            Tanzania inapitia bomu ya maendeleo ya miundombinu isiyowahi kutokea, na miradi mikubwa inabadilisha mandhari ya taifa. Kutoka kwa Reli ya Kiwango cha Kimataifa hadi mabwawa ya umeme wa maji na barabara za kisasa, miradi hii ya malengo makubwa inategemea kipengele kimoja muhimu: saruji ya ubora wa juu. Makala hii inachunguza mapinduzi ya miundombinu ya Tanzania na jukumu muhimu ambalo saruji inayozalishwa nchini inacheza katika kujenga mustakabali wa taifa.
          </p>
          
          <h2>Mapinduzi ya Miundombinu ya Tanzania</h2>
          
          <p>
            Maendeleo ya miundombinu ya Tanzania yameongezeka sana katika miaka ya hivi karibuni, yakiendeshwa na msisitizo wa serikali wa kuunda uchumi wa kati, nusu-viwanda. Miradi mikubwa ni pamoja na:
          </p>
          
          <ul>
            <li><strong>Reli ya Kiwango cha Kimataifa (SGR):</strong> Reli ya kisasa ya kilomita 1,219 inayounganisha Dar es Salaam na nchi jirani</li>
            <li><strong>Mradi wa Umeme wa Maji wa Julius Nyerere:</strong> Bwawa la MW 2,115 ambalo litaongeza zaidi ya mara mbili uwezo wa uzalishaji wa umeme wa Tanzania</li>
            <li><strong>Barabara Kuu ya Dar es Salaam-Chalinze:</strong> Barabara ya kwanza ya Tanzania yenye njia sita</li>
            <li><strong>Upanuzi wa bandari:</strong> Kusasisha bandari za Dar es Salaam, Mtwara, na Tanga</li>
            <li><strong>Viwanja vipya vya ndege na vituo:</strong> Ikijumuisha Kituo cha 3 katika Uwanja wa Ndege wa Kimataifa wa Julius Nyerere</li>
          </ul>
          
          <p>
            Miradi hii kwa pamoja inahitaji tani milioni za saruji, ikiunda fursa na changamoto kwa wazalishaji wa ndani.
          </p>
          
          <h2>Jukumu Muhimu la Saruji Bora</h2>
          
          <h3>Mahitaji ya Kihandisi kwa Miradi ya Kitaifa</h3>
          
          <p>
            Miradi mikubwa ya miundombinu inahitaji saruji yenye sifa maalum:
          </p>
          
          <ul>
            <li><strong>Daraja za nguvu za juu:</strong> Miradi mingi ya kitaifa inataja mahitaji ya chini ya nguvu ya ushindiliaji ya MPa 42.5 au zaidi</li>
            <li><strong>Udhabiti katika mazingira mbalimbali:</strong> Kutoka unyevu wa pwani hadi mabadiliko ya joto ya bara</li>
            <li><strong>Uthabiti katika wingi wa uzalishaji mkubwa:</strong> Udhibiti wa ubora kwa kiwango ni muhimu</li>
            <li><strong>Aina maalum za saruji:</strong> Ikijumuisha saruji inayostahimili sulfate kwa miradi ya miundombinu ya maji</li>
          </ul>
          
          <div className="bg-gray-100 p-4 rounded-sm my-6">
            <p className="font-bold text-nyati-navy mb-2">Mfano wa Utafiti:</p>
            <p>Mradi wa Umeme wa Maji wa Julius Nyerere unatumia zaidi ya tani 600,000 za saruji, pamoja na mahitaji makali ya usugu wa maji, udhibiti wa mali za joto, na udhabiti chini ya kujiloweka kwa maji mfululizo. Bidhaa za Nyati za Lake Cement zimechaguliwa kwa sehemu za mradi huu kutokana na ubora wao endelevu na kufuata kwa makini maelezo.</p>
          </div>
          
          <h2>Uzalishaji wa Ndani: Kukabiliana na Changamoto</h2>
          
          <p>
            Sekta ya saruji ya Tanzania imebadilika sana kukidhi mahitaji haya:
          </p>
          
          <ul>
            <li>Uwezo wa uzalishaji umeongezeka kutoka tani milioni 3.8 mwaka 2015 hadi zaidi ya tani milioni 10 leo</li>
            <li>Viwango vya ubora vimeboreka na vifaa vipya vya upimaji na michakato ya uhakikisho wa ubora</li>
            <li>Teknolojia mpya za uzalishaji zimeanzishwa kuboresha utendaji wa saruji</li>
            <li>Ubobezi katika aina za saruji kwa matumizi tofauti umeendelezwa</li>
          </ul>
          
          <p>
            Chapa ya Nyati ya Lake Cement imekuwa mstari wa mbele wa mabadiliko haya, ikiwekeza katika vifaa vya uzalishaji vya kisasa ambavyo vinafikia viwango vya kimataifa wakati huohuo ikitumia malighafi za ndani.
          </p>
        </>
      )
    }
  }
  // Add more blog posts here as needed
};

export function BlogPostWrapper({ slug }) {
  const { language } = useLanguage();
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    if (slug && blogPostsData[slug]) {
      setPostData(blogPostsData[slug]);
    }
  }, [slug]);

  if (!postData) {
    return <div className="p-12 text-center">Loading...</div>;
  }

  const currentLanguageData = postData[language] || postData.en;

  return (
    <BlogPost
      title={postData.en.title}
      titleSw={postData.sw.title}
      date={postData.en.date}
      dateSw={postData.sw.date}
      category={postData.en.category}
      categorySw={postData.sw.category}
      readTime={postData.en.readTime}
      readTimeSw={postData.sw.readTime}
      relatedPosts={postData}
    >
      {currentLanguageData.content}
    </BlogPost>
  );
}
