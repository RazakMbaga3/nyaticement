// app/blog/building-your-dream-home/page.js
'use client';

import React from 'react';
import { BlogPostWrapper } from '../../components/BlogPostWrapper';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogPost from '../../components/BlogPost';
import Image from 'next/image';
import Link from 'next/link';

// Related blog posts
const relatedPostsData = {
  en: [
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
  sw: [
    {
      title: 'Kuelewa Daraja (Grade) za Saruji: Kuchagua Saruji ya Nyati Sahihi kwa Mradi Wako',
      excerpt: 'Jifunze jinsi ya kuchagua daraja kamili la saruji kwa mahitaji yako maalum ya ujenzi kupitia mwongozo wetu wa kina.',
      date: 'Machi 28, 2025',
      category: 'Ujuzi wa Kiufundi',
      slug: '/blog/understanding-cement-grades',
      readTime: '3 Dakika za Kusoma'
    },
    {
      title: '',
      excerpt: 'Gundua jinsi uwiano wa maji-saruji unavyoathiri nguvu ya zege, udhabiti, na utendaji wa jumla.',
      date: 'Machi 26, 2025',
      category: 'Ujuzi wa Kiufundi',
      slug: '/blog/water-cement-ratio',
      readTime: '2 Dakika za Kusoma'
    }
  ]
};

export default function BuildingYourDreamHomePage() {
  const { language } = useLanguage();
  
  const blogPostData = {
    en: {
      title: "Building Your Dream Home with Nyati Cement: A Step-by-Step Guide",
      date: "April 3, 2025",
      category: "DIY & Home Building",
      readTime: "6 Minute Read"
    },
    sw: {
      title: "Kujenga Nyumba ya Ndoto Yako kwa Saruji ya Nyati: Mwongozo wa Hatua kwa Hatua",
      date: "Aprili 3, 2025",
      category: "DIY & Ujenzi wa Nyumba",
      readTime: "6 Dakika za Kusoma"
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
        <React.Fragment>
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

          <h3>Excavation</h3>
          <p>The foundation begins with proper excavation:</p>
          <ul>
            <li>Dig foundation trenches to the depth specified by your structural engineer</li>
            <li>Ensure the bottom of the trench is flat and compacted</li>
            <li>Set up foundation forms using wooden boards</li>
          </ul>

          <h3>Concrete Mixture</h3>
          <p>For a strong foundation, the right cement mixture is crucial:</p>
          <ul>
            <li>Use Nyati 42.5R cement for foundations due to its high strength and durability</li>
            <li>Mix at a ratio prescribed by your structural engineer</li>
            <li>Maintain a water-cement ratio as recommended by construction experts for optimal strength</li>
            <li>Mix thoroughly until you achieve a consistent texture</li>
          </ul>

          <div className="bg-navy-50 border-l-4 border-navy-900 p-4 my-6">
            <p className="font-bold">Pro Tip:</p>
            <p>Never compromise on foundation quality. Using high-quality Nyati 42.5R cement for your foundation will ensure the long-term stability of your entire structure with its superior load-bearing capacity and early strength development.</p>
          </div>

          <h3>Pouring the Foundation</h3>
          <p>Careful pouring ensures a solid base:</p>
          <ul>
            <li>Pour the concrete mixture into the foundation trenches</li>
            <li>Use a vibrator to remove air bubbles and ensure proper settling</li>
            <li>Level the surface with a screed board</li>
            <li>Allow the foundation to cure for the duration recommended by your engineer, keeping it moist throughout</li>
          </ul>

          <h2>3. Building the Structural Frame</h2>

          <h3>Column Construction</h3>
          <p>Columns provide critical structural support:</p>
          <ul>
            <li>Create reinforcement cages using steel bars as specified by your structural engineer</li>
            <li>Place the cages at designated points along the foundation</li>
            <li>Build formwork around the reinforcement</li>
            <li>Use Nyati 42.5R cement at a ratio prescribed by an engineer for columns</li>
            <li>Pour the concrete and vibrate to remove air pockets</li>
            <li>Allow columns to cure for the duration recommended by your structural engineer</li>
          </ul>

          <div className="relative h-64 w-full my-8 rounded-sm overflow-hidden">
            <Image 
              src="/images/blog/column.jpeg" 
              alt="Column construction with reinforcement" 
              fill 
              className="object-cover"
            />
          </div>

          <h3>Beam Construction</h3>
          <p>Horizontal beams connect and support the structure:</p>
          <ul>
            <li>Set up formwork and reinforcement for beams</li>
            <li>Connect beam reinforcement to column reinforcement</li>
            <li>Use Nyati 42.5R cement mixture as advised by an engineer for optimal strength</li>
            <li>Ensure proper curing with regular watering as directed by your construction expert</li>
          </ul>

          <h2>4. Wall Construction</h2>

          <h3>Bricklaying</h3>
          <p>Quality brickwork requires precision and the right mortar:</p>
          <ul>
            <li>Use Nyati 32.5N cement for mortar at a ratio advised by a professional mason</li>
            <li>Lay out the first course of bricks to mark wall positions</li>
            <li>Build corners first as guides for wall height and alignment</li>
            <li>Use a string line between corners to ensure straight walls</li>
            <li>Maintain consistent mortar joints at the thickness recommended by your mason</li>
            <li>Check for plumb (vertical alignment) frequently</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
            <p className="font-bold">Why Nyati 32.5N for Mortar?</p>
            <p>Nyati 32.5N offers superior adhesion that eliminates the need for extra lime in plasters. Its great workability and plasticity makes it perfect for creating smooth, durable mortar joints with excellent bonding properties.</p>
          </div>

          <h3>Creating Openings</h3>
          <p>Plan for doors and windows during wall construction:</p>
          <ul>
            <li>Use temporary supports (lintels) above door and window openings</li>
            <li>Construct permanent concrete lintels with Nyati 42.5R cement</li>
            <li>Allow lintels to cure fully before removing temporary supports, as advised by your engineer</li>
          </ul>

          <h2>5. Roof Construction</h2>

          <h3>Roof Frame</h3>
          <p>The roof frame must be strong enough to support roofing materials:</p>
          <ul>
            <li>Construct trusses or rafters according to your roof design</li>
            <li>Ensure proper anchoring to the wall structure</li>
            <li>Create adequate overhangs for weather protection as recommended by your architect</li>
          </ul>

          <h3>Concrete Roof Slab (if applicable)</h3>
          <p>For flat concrete roofs:</p>
          <ul>
            <li>Build formwork and reinforcement for the roof slab</li>
            <li>Use Nyati 42.5R cement at a ratio prescribed by an engineer for high-grade concrete with superior load-bearing capacity</li>
            <li>Consider adding waterproofing admixtures to the mix</li>
            <li>Pour the concrete and level carefully</li>
            <li>Cure for the duration recommended by your structural engineer before adding further waterproofing</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
            <p className="font-bold">Important Note:</p>
            <p>Proper curing is essential for concrete strength development. Always keep newly poured concrete moist for the duration recommended by your engineer to achieve maximum strength. With Nyati 42.5R, you'll notice faster strength development thanks to its high initial strength properties.</p>
          </div>

          <h2>6. Finishing Work</h2>

          <h3>Plastering</h3>
          <p>Smooth walls require quality plastering:</p>
          <ul>
            <li>Mix Nyati 32.5N cement with fine sand at the ratio prescribed by your mason for plastering</li>
            <li>Apply a thin scratch coat first to ensure adhesion</li>
            <li>Follow with a leveling coat at the thickness recommended by your plastering professional</li>
            <li>Finish with a thin final coat for a smooth surface</li>
            <li>Cure the plaster by keeping it moist for the duration advised by your mason</li>
          </ul>

          <div className="relative h-64 w-full my-8 rounded-sm overflow-hidden">
            <Image 
              src="/images/blog/plastering.webp" 
              alt="Wall plastering with cement" 
              fill 
              className="object-cover"
            />
          </div>

          <h3>Flooring</h3>
          <p>Durable floors start with proper concrete:</p>
          <ul>
            <li>Create a base layer with Nyati 32.5N cement mixed according to your contractor's specifications</li>
            <li>For the finish layer, use Nyati 42.5R with a stronger mix as advised by your flooring expert for higher durability</li>
            <li>Consider adding floor hardeners for high-traffic areas</li>
            <li>Allow the floor to cure fully before applying tiles or other finishes, as recommended by your contractor</li>
          </ul>

          <h3>External Finishes</h3>
          <p>Protect your home from the elements:</p>
          <ul>
            <li>Apply waterproofing treatments to external walls</li>
            <li>Create proper drainage systems around the home</li>
            <li>Consider a decorative finish like textured plaster or paint</li>
          </ul>

          <h2>7. Special Considerations for Tanzania's Climate</h2>

          <h3>Coastal Regions</h3>
          <p>For homes near the ocean:</p>
          <ul>
            <li>Use Nyati 42.5R cement for all structural elements to resist salt corrosion</li>
            <li>Increase concrete cover over reinforcement as specified by your coastal construction expert</li>
            <li>Consider additional waterproofing treatments</li>
          </ul>

          <h3>Rainy Regions</h3>
          <p>In areas with heavy rainfall:</p>
          <ul>
            <li>Ensure proper roof overhangs to protect walls, as designed by your architect</li>
            <li>Create adequate drainage around the house</li>
            <li>Use Nyati 42.5R cement for external applications where water resistance is critical</li>
            <li>Consider raised foundations to prevent flooding, as advised by your engineer</li>
          </ul>

          <h2>8. Maintenance Tips for Longevity</h2>

          <p>Proper maintenance ensures your home lasts for generations:</p>
          <ul>
            <li>Inspect for and repair any cracks in concrete or plaster promptly</li>
            <li>Check and maintain roof integrity annually</li>
            <li>Clean and repaint external surfaces as needed</li>
            <li>Maintain proper drainage systems around the home</li>
          </ul>

          <h2>Conclusion</h2>

          <p>Building a home is a complex but rewarding process. By using quality materials like Nyati Cement products and following proper construction techniques, you'll create a safe, durable home that will serve your family for decades to come.</p>

          <div className="border-t border-b border-gray-200 rounded-sm py-6 my-8">
            <p className="italic text-nyati-grey">
              Do you have questions about building your home with Nyati Cement? Share your thoughts in the comments below or contact our technical support team at +255 658 888 999 for personalized advice.
            </p>
          </div>
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
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* SWAHILI TRANSLATION STARTS HERE */}
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
            Kujenga nyumba yako mwenyewe ni moja ya mafanikio makubwa maishani. Kwa kutumia Saruji ya Nyati na mipango makini, unaweza kujenga nyumba itakayodumu kwa vizazi. Mwongozo huu wa kina utakupitisha hatua muhimu za ujenzi wa nyumba, ukizingatia matumizi sahihi ya saruji kwa matokeo bora.
          </p>
          <h2>1. Mipango na Maandalizi</h2>
          <h3>Kubuni Nyumba Yako</h3>
          <p>Kabla ya kuanza ujenzi wowote, unahitaji mpango madhubuti:</p>
          <ul>
            <li>Fanya kazi na mbunifu (architect) ili kupata michoro ya kina</li>
            <li>Pata vibali vyote muhimu vya ujenzi</li>
            <li>Andaa bajeti na ratiba halisi</li>
            <li>Chagua bidhaa sahihi za Saruji ya Nyati kwa kila hatua</li>
          </ul>
          <h3>Maandalizi ya Eneo</h3>
          <p>Maandalizi sahihi ya eneo huweka msingi wa mafanikio:</p>
          <ul>
            <li>Safisha eneo la ujenzi kwa kuondoa mimea, taka na vizuizi</li>
            <li>Sawazisha ardhi kulingana na mpango wa ujenzi</li>
            <li>Weka alama za msingi kwa kutumia vigingi na kamba</li>
            <li>Andaa mifereji ya maji kuzuia maji kukusanyika karibu na jengo</li>
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
          <h3>Uchimbaji</h3>
          <p>Msingi huanza na uchimbaji sahihi:</p>
          <ul>
            <li>Chimba mitaro ya msingi kwa kina kilichoainishwa na mhandisi wako</li>
            <li>Hakikisha chini ya mtaro ni tambarare na imeshindiliwa</li>
            <li>Sanidi fomu za msingi kwa mbao</li>
          </ul>
          <h3>Mchanganyiko wa Zege</h3>
          <p>Kwa msingi imara, mchanganyiko sahihi wa saruji ni muhimu:</p>
          <ul>
            <li>Tumia saruji ya Nyati 42.5R kwa misingi kwa sababu ya uimara wake wa juu</li>
            <li>Changanya kwa uwiano uliopendekezwa na mhandisi wako</li>
            <li>Dumisha uwiano wa maji-saruji kama inavyopendekezwa na wataalamu wa ujenzi</li>
            <li>Koroga vizuri hadi upate mchanganyiko wa aina moja</li>
          </ul>
          <div className="bg-navy-50 border-l-4 border-navy-900 p-4 my-6">
            <p className="font-bold">Dokezo la Kitaalamu:</p>
            <p>Usikubali ubora wa msingi upungue. Kutumia saruji bora ya Nyati 42.5R kwenye msingi wako kutahakikisha uimara wa muda mrefu wa jengo lako lote kutokana na uwezo wake mkubwa wa kubeba mizigo na kupata nguvu mapema.</p>
          </div>
          <h3>Kumimina Msingi</h3>
          <p>Kumimina kwa uangalifu kunahakikisha msingi imara:</p>
          <ul>
            <li>Mimina mchanganyiko wa zege kwenye mitaro ya msingi</li>
            <li>Tumia mtetemeshi kuondoa hewa na kuhakikisha zege limekaa vizuri</li>
            <li>Sawazisha uso kwa ubao wa kusawazisha</li>
            <li>Acha msingi ukauke kwa muda uliopendekezwa na mhandisi, ukidumisha unyevu wakati wote</li>
          </ul>
          <h2>3. Ujenzi wa Fremu ya Muundo</h2>
          <h3>Ujenzi wa Nguzo</h3>
          <p>Nguzo hutoa msaada muhimu wa muundo:</p>
          <ul>
            <li>Tengeneza nguzo za chuma kulingana na maelekezo ya mhandisi</li>
            <li>Weka nguzo kwenye maeneo yaliyopangwa kwenye msingi</li>
            <li>Sanidi fomu za mbao kuzunguka nguzo</li>
            <li>Tumia saruji ya Nyati 42.5R kwa uwiano uliopendekezwa na mhandisi</li>
            <li>Mimina zege na tumia mtetemeshi kuondoa hewa</li>
            <li>Acha nguzo zikauke kwa muda uliopendekezwa na mhandisi</li>
          </ul>
          <div className="relative h-64 w-full my-8 rounded-sm overflow-hidden">
            <Image 
              src="/images/blog/column.jpeg" 
              alt="Ujenzi wa nguzo na chuma" 
              fill 
              className="object-cover"
            />
          </div>
          <h3>Ujenzi wa Boriti</h3>
          <p>Boriti za mlalo zinaunganisha na kusaidia muundo:</p>
          <ul>
            <li>Sanidi fomu na chuma kwa boriti</li>
            <li>Unganisha chuma cha boriti na cha nguzo</li>
            <li>Tumia mchanganyiko wa saruji ya Nyati 42.5R kama inavyoshauriwa na mhandisi</li>
            <li>Dumisha unyevu wa boriti kwa kumwagilia mara kwa mara kama inavyoshauriwa na mtaalamu</li>
          </ul>
          <h2>4. Ujenzi wa Kuta</h2>
          <h3>Ujenzi wa Matofali</h3>
          <p>Kazi bora ya matofali inahitaji usahihi na mota bora:</p>
          <ul>
            <li>Tumia saruji ya Nyati 32.5N kwa mota kwa uwiano uliopendekezwa na fundi</li>
            <li>Weka safu ya kwanza ya matofali kuonyesha nafasi ya kuta</li>
            <li>Jenga pembe kwanza kama mwongozo wa urefu na usawa wa kuta</li>
            <li>Tumia kamba kati ya pembe ili kuhakikisha kuta ni nyoofu</li>
            <li>Dumisha unene wa viungio vya mota kama inavyoshauriwa na fundi</li>
            <li>Kagua usawa wa wima mara kwa mara</li>
          </ul>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
            <p className="font-bold">Kwa Nini Nyati 32.5N kwa Mota?</p>
            <p>Nyati 32.5N ina uwezo bora wa kushikamana unaoondoa haja ya chokaa cha ziada kwenye plasta. Urahisi wake wa kufanya kazi na plastiki hufanya iwe bora kwa kuunda viungio vya mota vyenye uimara na mshikamano mzuri.</p>
          </div>
          <h3>Kuunda Nafasi za Milango na Madirisha</h3>
          <p>Panga milango na madirisha wakati wa ujenzi wa kuta:</p>
          <ul>
            <li>Tumia nguzo za muda juu ya nafasi za milango na madirisha</li>
            <li>Tengeneza nguzo za kudumu za zege kwa saruji ya Nyati 42.5R</li>
            <li>Acha nguzo zikauke kikamilifu kabla ya kuondoa nguzo za muda, kama inavyoshauriwa na mhandisi</li>
          </ul>
          <h2>5. Ujenzi wa Paa</h2>
          <h3>Fremu ya Paa</h3>
          <p>Fremu ya paa lazima iwe imara kubeba uzito wa vifaa vya paa:</p>
          <ul>
            <li>Tengeneza trasi au boriti za paa kulingana na muundo wa paa</li>
            <li>Hakikisha zimefungwa vizuri kwenye kuta</li>
            <li>Tengeneza upinde wa kutosha wa paa kulinda kuta dhidi ya mvua kama inavyoshauriwa na mbunifu</li>
          </ul>
          <h3>Sakafu ya Zege ya Paa (ikihitajika)</h3>
          <p>Kwa paa tambarare za zege:</p>
          <ul>
            <li>Sanidi fomu na chuma kwa sakafu ya paa</li>
            <li>Tumia saruji ya Nyati 42.5R kwa uwiano uliopendekezwa na mhandisi kwa uimara wa juu</li>
            <li>Fikiria kuongeza viongezwa vya kuzuia maji</li>
            <li>Mimina zege na usawazishe vizuri</li>
            <li>Acha sakafu ikauke kwa muda uliopendekezwa kabla ya kuongeza kinga zaidi ya maji</li>
          </ul>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
            <p className="font-bold">Angalizo Muhimu:</p>
            <p>Kutibu zege ni muhimu kwa ukuaji wa nguvu. Daima hakikisha zege jipya linadumishwa na unyevu kwa muda uliopendekezwa ili kupata uimara wa juu. Ukiwa na Nyati 42.5R, utaona ukuaji wa nguvu wa haraka kutokana na sifa zake za nguvu za awali.</p>
          </div>
          <h2>6. Kazi za Kumalizia</h2>
          <h3>Upakaji wa Plasta</h3>
          <p>Kuta laini zinahitaji upakaji wa plasta bora:</p>
          <ul>
            <li>Changanya saruji ya Nyati 32.5N na mchanga laini kwa uwiano uliopendekezwa na fundi</li>
            <li>Paka safu nyembamba ya mwanzo ili kuhakikisha mshikamano</li>
            <li>Endelea na safu ya kusawazisha kwa unene uliopendekezwa na fundi</li>
            <li>Malizia kwa safu nyembamba kwa uso laini</li>
            <li>Tibu plasta kwa kudumisha unyevu kwa muda ulioshauriwa na fundi</li>
          </ul>
          <div className="relative h-64 w-full my-8 rounded-sm overflow-hidden">
            <Image 
              src="/images/blog/plastering.webp" 
              alt="Upakaji wa plasta kwenye ukuta" 
              fill 
              className="object-cover"
            />
          </div>
          <h3>Sakafu</h3>
          <p>Sakafu imara huanza na zege bora:</p>
          <ul>
            <li>Tengeneza safu ya msingi kwa saruji ya Nyati 32.5N iliyochanganywa kulingana na maelekezo ya mkandarasi</li>
            <li>Kwa safu ya juu, tumia Nyati 42.5R kwa mchanganyiko wenye nguvu zaidi kama inavyoshauriwa na mtaalamu wa sakafu</li>
            <li>Fikiria kuongeza viongezwa vya kuimarisha sakafu kwa maeneo yenye msongamano mkubwa</li>
            <li>Acha sakafu ikauke kikamilifu kabla ya kuweka vigae au kumalizia nyingine, kama inavyoshauriwa na mkandarasi</li>
          </ul>
          <h3>Viimalizio vya Nje</h3>
          <p>Linda nyumba yako dhidi ya mazingira:</p>
          <ul>
            <li>Paka tiba za kuzuia maji kwenye kuta za nje</li>
            <li>Tengeneza mifereji bora ya maji kuzunguka nyumba</li>
            <li>Fikiria kumalizia kwa mapambo kama plasta yenye muundo au rangi</li>
          </ul>
          <h2>7. Mambo Maalum kwa Hali ya Hewa ya Tanzania</h2>
          <h3>Mikoa ya Pwani</h3>
          <p>Kwa nyumba karibu na bahari:</p>
          <ul>
            <li>Tumia saruji ya Nyati 42.5R kwa vipengele vyote vya muundo ili kuzuia kutu ya chumvi</li>
            <li>Ongeza unene wa zege juu ya chuma kama inavyoshauriwa na mtaalamu wa ujenzi wa pwani</li>
            <li>Fikiria kuongeza tiba za ziada za kuzuia maji</li>
          </ul>
          <h3>Mikoa ya Mvua Nyingi</h3>
          <p>Kwa maeneo yenye mvua nyingi:</p>
          <ul>
            <li>Hakikisha paa lina upinde wa kutosha kulinda kuta, kama ilivyobuniwa na mbunifu</li>
            <li>Tengeneza mifereji bora ya maji kuzunguka nyumba</li>
            <li>Tumia saruji ya Nyati 42.5R kwa matumizi ya nje ambapo upinzani wa maji ni muhimu</li>
            <li>Fikiria msingi ulioinuliwa kuzuia mafuriko, kama inavyoshauriwa na mhandisi</li>
          </ul>
          <h2>8. Vidokezo vya Matunzo kwa Kudumu</h2>
          <p>Matunzo sahihi huhakikisha nyumba yako inadumu kwa vizazi:</p>
          <ul>
            <li>Kagua na rekebisha nyufa kwenye zege au plasta mara moja</li>
            <li>Kagua na hakikisha paa liko imara kila mwaka</li>
            <li>Safisha na paka rangi upya sehemu za nje inapohitajika</li>
            <li>Dumisha mifereji bora ya maji kuzunguka nyumba</li>
          </ul>
          <h2>Hitimisho</h2>
          <p>Kujenga nyumba ni mchakato mgumu lakini wenye thawabu. Kwa kutumia bidhaa bora za Saruji ya Nyati na kufuata mbinu sahihi za ujenzi, utajenga nyumba salama na imara itakayohudumia familia yako kwa miongo mingi.</p>
          <div className="border-t border-b border-gray-200 rounded-sm py-6 my-8">
            <p className="italic text-nyati-grey">
              Una maswali kuhusu kujenga nyumba yako kwa Saruji ya Nyati? Shiriki maoni yako hapa chini au wasiliana na timu yetu ya msaada wa kiufundi kwa ushauri maalum: +255 658 888 999.
            </p>
          </div>
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
        </React.Fragment>
      )}
    </BlogPost>
  );
}