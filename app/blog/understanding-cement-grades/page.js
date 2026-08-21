// app/blog/understanding-cement-grades/page.js
'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BlogPostWrapper } from '../../components/BlogPostWrapper'
import BlogPost from '../../components/BlogPost'
import { useLanguage } from '../../contexts/LanguageContext'

// Related posts for this article with bilingual support
const relatedPostsData = {
  en: [
    {
      title: 'The Role of Water-Cement Ratio in Concrete Durability',
      excerpt: 'Discover how the water-cement ratio affects concrete strength, durability, and overall performance.',
      category: 'Technical Knowledge',
      date: 'Coming Soon',
      readTime: '6 min read',
      slug: '#'
    },
    {
      title: 'Why Compressive Strength Matters: Nyati Cement\'s Testing Standards',
      excerpt: 'Understand the importance of compressive strength testing and how Nyati ensures consistent quality.',
      category: 'Technical Knowledge',
      date: 'Coming Soon',
      readTime: '5 min read',
      slug: '#'
    }
  ],
  sw: [
    {
      title: 'Athari ya Uwiano wa Maji na Saruji katika Udhabiti wa Zege',
      excerpt: 'Gundua jinsi uwiano wa maji-saruji unavyoathiri nguvu ya zege, udhabiti, na utendaji wa jumla.',
      category: 'Ujuzi wa Kiufundi',
      date: 'Inakuja Hivi Karibuni',
      readTime: '6 dakika za kusoma',
      slug: '#'
    },
    {
      title: 'Kwanini Nguvu ya Shinikizo la Saruji ni Muhimu: Viwango vya Upimaji vya Saruji ya Nyati',
      excerpt: 'Elewa umuhimu wa upimaji wa nguvu za kushindilia na jinsi Nyati inavyohakikisha ubora endelevu.',
      category: 'Ujuzi wa Kiufundi',
      date: 'Inakuja Hivi Karibuni',
      readTime: '5 dakika za kusoma',
      slug: '#'
    }
  ]
}

export default function CementGradesPage() {
  const { language } = useLanguage();
  
  const blogPostData = {
    en: {
      title: "Understanding Cement Grades: Choosing the Right Nyati Cement for Your Project",
      date: "March 28, 2025",
      category: "Technical Knowledge",
      readTime: "7 min read"
    },
    sw: {
      title: "Kuelewa Daraja (Grade) za Saruji: Kuchagua Saruji ya Nyati Sahihi kwa Mradi Wako",
      date: "Machi 28, 2025",
      category: "Ujuzi wa Kiufundi",
      readTime: "7 dakika za kusoma"
    }
  };
  return (
    <BlogPost 
      title={blogPostData.en.title}
      titleSw={blogPostData.sw.title}
      date={blogPostData.en.date}
      dateSw={blogPostData.sw.date}
      category={blogPostData.en.category}
      categorySw={blogPostData.sw.category}
      readTime={blogPostData.en.readTime}
      readTimeSw={blogPostData.sw.readTime}
      relatedPosts={relatedPostsData}
    >
      {language === 'en' ? (
        <p className="lead text-xl mb-6">
          When embarking on any construction project, selecting the appropriate cement grade is crucial for ensuring structural integrity, durability, and cost-effectiveness. Nyati Cement, manufactured by Lake Cement Ltd., offers multiple cement grades designed for specific applications. This guide will help you understand cement grades and select the right Nyati product for your construction needs.
        </p>
      ) : (
        <p className="lead text-xl mb-6">
          Unapoanza mradi wowote wa ujenzi, kuchagua daraja sahihi la saruji ni muhimu kwa kuhakikisha uzima wa muundo, udhabiti, na gharama nafuu. Saruji ya Nyati, inayotengenezwa na Lake Cement Ltd., inatoa daraja nyingi za saruji zilizoundwa kwa matumizi maalum. Mwongozo huu utakusaidia kuelewa daraja za saruji na kuchagua bidhaa sahihi ya Nyati kwa mahitaji yako ya ujenzi.
        </p>
      )}

      {/* Optional featured image */}      <div className="my-8 rounded-sm overflow-hidden relative aspect-w-16 aspect-h-9 bg-gray-100">
        {/* Placeholder for actual image */}
        <div className="absolute inset-0 flex items-center justify-center bg-nyati-orange/10">
          <span className="text-nyati-navy font-bold">{language === 'en' ? '[Featured Image: Various cement grades being used in construction]' : '[Picha ya Mada: Daraja mbalimbali za saruji zikitumika katika ujenzi]'}</span>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">{language === 'en' ? 'What Do Cement Grade Numbers Mean?' : 'Namba za Daraja la Saruji Zinamaanisha Nini?'}</h2>
      {language === 'en' ? (
        <p>
          The numbers in cement grades (such as 32.5N or 42.5R) indicate the minimum compressive strength in megapascals (MPa) the cement will achieve after 28 days of curing. The letter indicates the rate of strength development:
        </p>
      ) : (
        <p>
          Namba katika daraja za saruji (kama vile 32.5N au 42.5R) zinaonesha nguvu za chini za kustahimili shindikizo katika megapascali (MPa) ambazo saruji itafikia baada ya siku 28 za kuimarisha. Herufi inaonesha kiwango cha muda cha ukuaji wa nguvu:
        </p>
      )}
      <ul className="list-disc pl-6 mt-3 mb-6">
        {language === 'en' ? (
          <>
            <li><strong>N</strong> (Normal): Standard early strength development</li>
            <li><strong>R</strong> (Rapid): Higher early strength development</li>
          </>
        ) : (
          <>
            <li><strong>N</strong> (Kawaida): Ukuaji wa kawaida wa nguvu za mapema</li>
            <li><strong>R</strong> (Haraka): Ukuaji wa juu wa nguvu za mapema</li>
          </>
        )}
      </ul>      <div className="bg-nyati-cream p-6 rounded-lg my-8">
        <h3 className="text-xl font-bold text-nyati-navy mb-3">{language === 'en' ? 'Key Takeaway:' : 'Mapendekezo Muhimu:'}</h3>
        <p className="italic">
          {language === 'en' ? 
            'The higher the grade number, the stronger the final concrete will be. The "R" designation means the cement sets faster and gains strength earlier - ideal for projects with tight timelines.' 
          : 
            'Kadiri namba ya daraja inavyozidi kuwa kubwa, ndivyo zege la mwisho litakavyokuwa imara zaidi. Alama ya "R" inamaanisha saruji inaganda haraka na kupata nguvu mapema - inafaa kwa miradi yenye ratiba za muda mfupi.'
          }
        </p>
      </div>      <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">{language === 'en' ? 'Nyati Cement CEM II A-L 42.5R: For Fast-Track Projects' : 'Saruji ya Nyati CEM II A-L 42.5R: Kwa Miradi ya Haraka'}</h2>
      <div className="bg-navy-50 p-6 rounded-lg mb-6 border-l-4 border-nyati-navy">
        <h3 className="text-xl font-bold text-nyati-navy mb-3">{language === 'en' ? 'Key Features:' : 'Sifa Muhimu:'}</h3>
        <ul className="list-disc pl-6 mb-4">
          {language === 'en' ? (
            <>
              <li>Superior early strength development (21-22 MPa at 2 days)</li>
              <li>High final compressive strength (42.5-52 MPa at 28 days)</li>
            </>
          ) : (
            <>
              <li>Ukuaji bora wa nguvu za mapema (21-22 MPa kwa siku 2)</li>
              <li>Nguvu ya juu ya kushindilia ya mwisho (42.5-52 MPa kwa siku 28)</li>
            </>
          )}
        </ul>
        
        <h3 className="text-xl font-bold text-nyati-navy mb-3">{language === 'en' ? 'Ideal Applications:' : 'Matumizi Bora:'}</h3>
        <ul className="list-disc pl-6 mb-4">
          {language === 'en' ? (
            <>
              <li>Quality Blocks and Pavers</li>
              <li>Precast concrete elements</li>
              <li>Ready-mix concrete requiring high early strength</li>
              <li>Projects with tight construction schedules</li>
              <li>Prestressed concrete components</li>
              <li>Hydraulic structures</li>
              <li>Construction during colder weather when faster setting is beneficial</li>
            </>
          ) : (
            <>
              <li>Matofali ya Ubora na Vigae</li>
              <li>Vipengele vya zege vilivyotengenezwa kabla</li>
              <li>Zege lililochanganywa tayari linalohitaji nguvu za juu mapema</li>
              <li>Miradi yenye ratiba kali za ujenzi</li>
              <li>Vipengele vya zege vilivyowekewa msukumo kabla</li>
              <li>Miundo ya maji</li>
              <li>Ujenzi wakati wa hali ya hewa baridi wakati kuganda kwa haraka kuna manufaa</li>
            </>
          )}
        </ul>
        
        <h3 className="text-xl font-bold text-nyati-navy mb-3">{language === 'en' ? 'Why Choose Nyati 42.5R:' : 'Kwa Nini Uchague Nyati 42.5R:'}</h3>
        <p>
          {language === 'en' ? 
            'When time is critical but strength cannot be compromised, Nyati 42.5R allows faster formwork removal, earlier loading of structures, and quicker project completion while maintaining exceptional long-term durability.' 
          : 
            'Wakati muda ni muhimu lakini nguvu haiwezi kupunguzwa, Nyati 42.5R inaruhusu kuondolewa kwa fomu haraka zaidi, kupakia mapema kwa miundo, na kukamilisha mradi haraka zaidi huku ikidumisha udhabiti wa kipekee wa muda mrefu.'
          }
        </p>
      </div>      <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">{language === 'en' ? 'Nyati Cement CEM II B-M 42.5N: The All-Purpose Performer' : 'Saruji ya Nyati CEM II B-M 42.5N: Mtendaji wa Madhumuni Yote'}</h2>
      <div className="bg-amber-50 p-6 rounded-lg mb-6 border-l-4 border-nyati-orange">
        <h3 className="text-xl font-bold text-nyati-navy mb-3">{language === 'en' ? 'Key Features:' : 'Sifa Muhimu:'}</h3>
        <ul className="list-disc pl-6 mb-4">
          {language === 'en' ? (
            <>
              <li>Normal Initial Strength</li>
              <li>Balanced strength development profile</li>
              <li>Excellent workability</li>
              <li>High ultimate compressive strength (42.5-51 MPa at 28 days)</li>
            </>
          ) : (
            <>
              <li>Nguvu za Awali za Kawaida</li>
              <li>Uwiano mzuri wa ukuaji wa nguvu</li>
              <li>Urahisi wa kuchanganya na kutumika</li>
              <li>Nguvu ya juu ya mwisho ya kushindilia (42.5-51 MPa kwa siku 28)</li>
            </>
          )}
        </ul>
        
        <h3 className="text-xl font-bold text-nyati-navy mb-3">{language === 'en' ? 'Ideal Applications:' : 'Matumizi Bora:'}</h3>
        <ul className="list-disc pl-6 mb-4">
          {language === 'en' ? (
            <>
              <li>General construction work requiring high-grade concrete</li>
              <li>High-rise buildings and substantial structures</li>
              <li>Ready-mix concrete operations</li>
              <li>Projects where balanced setting time and strength are required</li>
              <li>Bridge construction and other infrastructure works</li>
            </>
          ) : (
            <>
              <li>Kazi za ujenzi za kawaida zinazohitaji zege la daraja la juu</li>
              <li>Majengo marefu na miundo mikubwa</li>
              <li>Operesheni za zege lililochanganywa tayari</li>
              <li>Miradi ambapo muda wa kusawazisha na nguvu unahitajika</li>
              <li>Ujenzi wa daraja na kazi zingine za miundombinu</li>
            </>
          )}
        </ul>
        
        <h3 className="text-xl font-bold text-nyati-navy mb-3">{language === 'en' ? 'Why Choose Nyati 42.5N:' : 'Kwa Nini Uchague Nyati 42.5N:'}</h3>
        <p>
          {language === 'en' ? 
            'This versatile grade offers an optimal balance between workability and strength development, making it suitable for most construction applications while providing superior long-term performance.' 
          : 
            'Daraja hili lenye uwezo mbalimbali linatoa uwiano bora kati ya kufanya kazi kwa urahisi na ukuaji wa nguvu, kuifanya ifae kwa matumizi mengi ya ujenzi huku ikitoa utendaji bora wa muda mrefu.'
          }
        </p>
      </div>      <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">{language === 'en' ? 'Nyati Cement CEM II B-L 32.5N: For General Construction' : 'Saruji ya Nyati CEM II B-L 32.5N: Kwa Ujenzi wa Kawaida'}</h2>
      <div className="bg-green-50 p-6 rounded-lg mb-6 border-l-4 border-green-600">
        <h3 className="text-xl font-bold text-nyati-navy mb-3">{language === 'en' ? 'Key Features:' : 'Sifa Muhimu:'}</h3>
        <ul className="list-disc pl-6 mb-4">
          {language === 'en' ? (
            <>
              <li>Moderate heat of hydration</li>
              <li>Good workability and plasticity</li>
              <li>Excellent adhesion</li>
            </>
          ) : (
            <>
              <li>Joto la wastani la kuchanganyika na maji</li>
              <li>Urahisi mzuri wa kuchanganyika na ulegevu mzuri wa zege</li>
              <li>Ushikamano bora wa saruji</li>
            </>
          )}
        </ul>
        
        <h3 className="text-xl font-bold text-nyati-navy mb-3">{language === 'en' ? 'Ideal Applications:' : 'Matumizi Bora:'}</h3>
        <ul className="list-disc pl-6 mb-4">
          {language === 'en' ? (
            <>
              <li>Standard Construction</li>
              <li>Mortars and masonry works</li>
              <li>Road stabilization</li>
              <li>General civil works</li>
              <li>Non-structural applications like plastering and flooring</li>
            </>
          ) : (
            <>
              <li>Ujenzi wa Kawaida</li>
              <li>Mota na kazi za uashi</li>
              <li>Uimarishaji wa barabara</li>
              <li>Kazi za kiraia za kawaida</li>
              <li>Matumizi yasiyo ya kimuundo kama kupaua na sakafu</li>
            </>
          )}
        </ul>
        
        <h3 className="text-xl font-bold text-nyati-navy mb-3">{language === 'en' ? 'Why Choose Nyati 32.5N:' : 'Kwa Nini Uchague Nyati 32.5N:'}</h3>
        <p>
          {language === 'en' ? 
            'When working on projects that don\'t require high early strength but need good workability and reduced heat generation, 32.5N provides a cost-effective solution without sacrificing quality.' 
          : 
            'Unapofanya kazi kwenye miradi ambayo haitaji nguvu za juu mapema lakini inahitaji kufanya kazi vizuri na uzalishaji wa joto uliopunguzwa, 32.5N hutoa suluhisho lenye gharama nafuu bila kuathiri ubora.'
          }
        </p>
      </div>      <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">{language === 'en' ? 'Nyati Cement CEM I OPC 42.5N: The Pure Portland Option' : 'Saruji ya Nyati CEM I OPC 42.5N: Chaguo la Portland Safi'}</h2>
      <div className="bg-violet-50 p-6 rounded-lg mb-6 border-l-4 border-violet-600">
        <h3 className="text-xl font-bold text-nyati-navy mb-3">{language === 'en' ? 'Key Features:' : 'Sifa Muhimu:'}</h3>
        <ul className="list-disc pl-6 mb-4">
          {language === 'en' ? (
            <>
              <li>Excellent early strength (21-22 MPa at 2 days)</li>
              <li>High final strength (42.5-62.5 MPa at 28 days)</li>
            </>
          ) : (
            <>
              <li>Nguvu bora za mapema (21-22 MPa kwa siku 2)</li>
              <li>Nguvu ya juu ya mwisho (42.5-62.5 MPa kwa siku 28)</li>
            </>
          )}
        </ul>
        
        <h3 className="text-xl font-bold text-nyati-navy mb-3">{language === 'en' ? 'Ideal Applications:' : 'Matumizi Bora:'}</h3>
        <ul className="list-disc pl-6 mb-4">
          {language === 'en' ? (
            <>
              <li>Precast concrete elements</li>
              <li>High Grade Concrete</li>
              <li>Large-scale Projects </li>
              <li>Applications requiring customized concrete mixes with specific additives</li>
            </>
          ) : (
            <>
              <li>Miundo ya zege ilivyotengenezwa kabla</li>
              <li>Zege la Daraja la Juu</li>
              <li>Miradi Kubwa</li>
              <li>Matumizi yanayohitaji mchanganyiko wa zege uliotengenezwa kwa viungo maalum</li>
            </>
          )}
        </ul>
        
        <h3 className="text-xl font-bold text-nyati-navy mb-3">{language === 'en' ? 'Why Choose Nyati OPC 42.5N:' : 'Kwa Nini Uchague Nyati OPC 42.5N:'}</h3>
        <p>
          {language === 'en' ? 
            'When specifications call for pure Portland cement or when creating specialized concrete mixes with specific additives, this grade provides the ideal foundation.' 
          : 
            'Pale ambapo vipimo vinahitaji saruji ya Portland safi au wakati wa kuunda mchanganyiko maalum wa zege na viungo maalum, daraja hili hutoa msingi mzuri zaidi.'
          }
        </p>
      </div>      <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">{language === 'en' ? 'Factors to Consider When Choosing Cement Grade' : 'Mambo ya Kuzingatia Wakati wa Kuchagua Daraja la Saruji'}</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-3">
        {language === 'en' ? (
          <>
            <li>
              <strong className="text-nyati-navy">Structural Requirements:</strong> 
              <p>Consider the load-bearing requirements and structural importance of your project. Higher grades (42.5 and above) are typically used for structural elements carrying significant loads.</p>
            </li>
            <li>
              <strong className="text-nyati-navy">Construction Timeline:</strong> 
              <p>Fast-track projects benefit from R-grade cements that allow quicker formwork removal and faster construction progress.</p>
            </li>
            <li>
              <strong className="text-nyati-navy">Weather Conditions:</strong> 
              <p>Cold weather construction may require higher-grade cements to counter slower setting times in lower temperatures.</p>
            </li>
            <li>
              <strong className="text-nyati-navy">Economic Considerations:</strong> 
              <p>Balance material costs against performance requirements. Using a higher grade than necessary increases project costs without providing proportional benefits.</p>
            </li>
            <li>
              <strong className="text-nyati-navy">Technical Specifications:</strong> 
              <p>Ensure compliance with project specifications and building codes, which may mandate specific cement types for particular applications.</p>
            </li>
          </>
        ) : (
          <>
            <li>
              <strong className="text-nyati-navy">Mahitaji ya Muundo:</strong> 
              <p>Fikiria mahitaji ya kubeba uzito na umuhimu wa muundo wa mradi wako. Daraja za juu zaidi (42.5 na zaidi) kwa kawaida hutumiwa kwa vipengele vya muundo vinavyobeba mizigo mikubwa.</p>
            </li>
            <li>
              <strong className="text-nyati-navy">Muda wa Ujenzi:</strong> 
              <p>Miradi ya haraka hunufaika na saruji za daraja R ambazo zinaruhusu kuondolewa kwa fomu haraka na maendeleo ya haraka ya ujenzi.</p>
            </li>
            <li>
              <strong className="text-nyati-navy">Hali ya Hewa:</strong> 
              <p>Ujenzi wa hali ya hewa baridi unaweza kuhitaji saruji za daraja la juu zaidi ili kukabiliana muda wa pole pole wa kuganda katika halijoto ya chini.</p>
            </li>
            <li>
              <strong className="text-nyati-navy">Masuala ya Kiuchumi:</strong> 
              <p>Sawazisha gharama za vifaa dhidi ya mahitaji ya utendaji. Kutumia daraja la juu zaidi kuliko linavyohitajika huongeza gharama za mradi bila kutoa faida zinazostahili.</p>
            </li>
            <li>
              <strong className="text-nyati-navy">Vipimo vya Kiufundi:</strong> 
              <p>Hakikisha kufuata vipimo vya mradi na kanuni za ujenzi, ambazo zinaweza kuweka aina maalum za saruji kwa matumizi maalum.</p>
            </li>
          </>
        )}
      </ol>      <div className="bg-nyati-navy text-white p-6 rounded-lg my-8">
        <h3 className="text-xl font-bold mb-3 text-nyati-light-orange">{language === 'en' ? 'Expert Tip:' : 'Ushauri wa Mtaalamu:'}</h3>        <p>
          {language === 'en' ? 
            'When in doubt, consult with Nyati Cement\'s technical team. Our experts can provide specific recommendations based on your project requirements, environmental conditions, and construction schedule.'
          :
            'Unapopatwa na mashaka, wasiliana na timu ya kiufundi ya Nyati Cement. Wataalamu wetu wanaweza kutoa mapendekezo maalum kulingana na mahitaji ya mradi wako, hali ya mazingira, na ratiba ya ujenzi.'
          }
        </p>
      </div>

      <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">{language === 'en' ? 'Conclusion' : 'Hitimisho'}</h2>
      {language === 'en' ? (
        <>
          <p>
            Selecting the appropriate cement grade is essential for project success. Nyati Cement's range of products offers solutions for every construction need, from rapid-setting requirements to general applications. For technical assistance in selecting the right cement grade for your specific project, Nyati Cement provides expert consultation through our technical support team.
          </p>
          <p className="mt-4">
            Remember that all Nyati Cement products exceed Tanzania Bureau of Standards (TBS) requirements, ensuring that regardless of which grade you choose, you're building with cement that delivers strength, reliability, and longevity.
          </p>
        </>
      ) : (
        <>
          <p>
            Kuchagua daraja sahihi la saruji ni muhimu kwa mafanikio ya mradi. Saruji za Nyati Cement zinatoa suluhisho kwa kila hitaji la ujenzi, kutoka kwa mahitaji ya kuganda kwa haraka hadi matumizi ya kawaida. Kwa usaidizi wa kiufundi katika kuchagua daraja sahihi la saruji kwa mradi wako mahususi, Nyati Cement hutoa ushauri wa wataalamu kupitia timu yetu ya msaada wa kiufundi.
          </p>
          <p className="mt-4">
            Kumbuka kuwa bidhaa zote za Nyati Cement hukidhi mahitaji ya Shirika la Viwango la Tanzania (TBS), kuhakikisha kuwa bila kujali ni daraja gani unalochagua, unajenga na saruji inayotoa nguvu, kuaminika, na kudumu kwa muda mrefu.
          </p>
        </>
      )}

      <div className="flex items-center mt-8 border-t border-gray-200 pt-8">
        <div className="mr-4">
          <Link 
            href="/blog" 
            className="flex items-center text-nyati-navy hover:text-nyati-orange transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {language === 'en' ? 'Back to Blog' : 'Rudi kwenye Blogu'}
          </Link>
        </div>
        <div className="ml-auto">
          <Link 
            href="/contact" 
            className="flex items-center text-nyati-navy hover:text-nyati-orange transition-colors"
          >
            {language === 'en' ? 'Have questions?' : 'Una maswali?'}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </BlogPost>
  )
}