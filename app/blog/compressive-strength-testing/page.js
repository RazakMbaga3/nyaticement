'use client';

import React from 'react';
import BlogPost from '../../components/BlogPost';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';

export default function CompressiveStrengthTestingPage() {
  const { language } = useLanguage();
  
  const relatedPosts = {
    en: [
      {
        title: 'The Role of Water-Cement Ratio in Concrete Durability',
        excerpt: 'Discover how the water-cement ratio affects concrete strength, durability, and overall performance.',
        category: 'Technical Knowledge',
        date: 'April 4, 2025',
        readTime: '8 min read',
        slug: '/blog/water-cement-ratio'
      },
      {
        title: 'Understanding Cement Grades: Choosing the Right Nyati Cement for Your Project',
        excerpt: 'Learn how to select the perfect cement grade for your specific construction needs with our comprehensive guide.',
        category: 'Technical Knowledge',
        date: 'March 28, 2025',
        readTime: '7 min read',
        slug: '/blog/understanding-cement-grades'
      }
    ],
    sw: [
      {
        title: 'Umuhimu wa Uwiano wa Maji-Saruji katika Udhabiti wa Zege',
        excerpt: 'Gundua jinsi uwiano wa maji-saruji unavyoathiri nguvu ya zege, udhabiti, na utendaji wa jumla.',
        category: 'Ujuzi wa Kiufundi',
        date: 'Aprili 4, 2025',
        readTime: 'Dakika 8 za kusoma',
        slug: '/blog/water-cement-ratio'
      },
      {
        title: 'Kuelewa Daraja (Grade) za Saruji: Kuchagua Saruji ya Nyati Sahihi kwa Mradi Wako',
        excerpt: 'Jifunze jinsi ya kuchagua daraja kamili la saruji kwa mahitaji yako maalum ya ujenzi kupitia mwongozo wetu wa kina.',
        category: 'Ujuzi wa Kiufundi',
        date: 'Machi 28, 2025',
        readTime: 'Dakika 7 za kusoma',
        slug: '/blog/understanding-cement-grades'
      }
    ]
  };

  return (
    <BlogPost
      title="Why Compressive Strength Matters: Nyati Cement's Testing Standards"
      titleSw="Kwa Nini Nguvu ya Kubana ni Muhimu: Viwango vya Upimaji vya Saruji ya Nyati"
      date="March 22, 2025"
      dateSw="Machi 22, 2025"
      category="Technical Knowledge"
      categorySw="Ujuzi wa Kiufundi"
      readTime="5 min read"
      readTimeSw="Dakika 5 za kusoma"
      relatedPosts={relatedPosts}
    >
      {language === 'en' ? (
        <React.Fragment>
          <p className="lead text-xl mb-6">
            When evaluating cement quality, compressive strength stands as the single most important performance metric. It determines how much load a structure can safely bear, influences durability, and serves as the primary indicator of overall cement quality. At Nyati Cement, we maintain rigorous testing standards that exceed industry requirements, ensuring every bag delivers consistent, reliable performance for your construction projects.
          </p>
          
          <div className="relative h-96 w-full mb-8 rounded-sm overflow-hidden">
            <Image 
              src="/images/blog/compression-test.jpg" 
              alt="Compressive strength testing machine with concrete cube specimen" 
              fill 
              className="object-cover"
              priority
            />
          </div>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">What is Compressive Strength?</h2>
          <p>
            Compressive strength refers to the maximum load a material can withstand before failing under compression. For concrete, it's typically measured in megapascals (MPa) or pounds per square inch (psi) and tested by applying increasing pressure to concrete specimens until they crack or break.
          </p>
          <p className="mt-4">
            This fundamental property determines a structure's load-bearing capacity and serves as a key indicator of other important characteristics including durability, permeability, and resistance to weathering. While concrete is designed to primarily resist compressive forces (as opposed to tensile forces), compressive strength testing provides insights into overall performance across multiple parameters.
          </p>

          <div className="bg-nyati-cream p-6 rounded-sm my-8">
            <h3 className="text-xl font-bold text-nyati-navy mb-3">Key Fact:</h3>
            <p className="italic">
              Concrete's compressive strength can be up to 10 times greater than its tensile strength, which is why reinforcement (like steel rebar) is used to compensate for concrete's relatively poor tensile strength capabilities.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Why Compressive Strength Matters</h2>
          
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-sm">
              <h3 className="text-lg font-bold text-nyati-navy mb-3">Structural Safety</h3>
              <p>
                Adequate compressive strength ensures structures can safely support intended loads plus additional safety margins to account for unexpected stresses from weather events, earthquakes, or usage changes over time.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-sm">
              <h3 className="text-lg font-bold text-nyati-navy mb-3">Durability Indicator</h3>
              <p>
                Higher compressive strength typically correlates with increased density, lower permeability, and greater resistance to chemical attack, freezing/thawing cycles, and general weathering.
              </p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-sm">
              <h3 className="text-lg font-bold text-nyati-navy mb-3">Economic Efficiency</h3>
              <p>
                Precisely understanding compressive strength allows for optimized structural designs that use materials efficiently, reducing costs while maintaining safety and performance.
              </p>
            </div>
          </div>

          <p className="mt-4">
            Beyond these primary benefits, compressive strength also:
          </p>
          <ul className="list-disc pl-6 mt-3 mb-6">
            <li>Indicates concrete's resistance to abrasion and wear</li>
            <li>Correlates with modulus of elasticity (stiffness)</li>
            <li>Affects creep behavior (time-dependent deformation)</li>
            <li>Influences crack development and propagation</li>
            <li>Serves as a quality control measure during production</li>
          </ul>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">How Compressive Strength is Tested</h2>
          
          <p>
            At Nyati Cement, we follow international standards for testing compressive strength:
          </p>
          
          <ol className="list-decimal pl-6 mb-6 space-y-3">
            <li>
              <strong>Specimen Preparation:</strong> Concrete cubes (150mm) or cylinders (150mm diameter x 300mm height) are prepared according to standard specifications.
            </li>
            <li>
              <strong>Curing:</strong> Specimens are cured in controlled conditions (temperature: 20±2°C, relative humidity: ≥95%) for specified periods, typically 3, 7, and 28 days.
            </li>
            <li>
              <strong>Testing:</strong> Specimens are placed in a calibrated compression testing machine and loaded at a controlled rate until failure.
            </li>
            <li>
              <strong>Calculation:</strong> Compressive strength is calculated by dividing the maximum load by the cross-sectional area of the specimen.
            </li>
          </ol>
          
          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Factors Affecting Compressive Strength</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-nyati-navy mb-3">Materials</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Cement type and quality</li>
                <li>Water-cement ratio</li>
                <li>Aggregate quality and size</li>
                <li>Admixtures</li>
                <li>Supplementary cementitious materials</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-nyati-navy mb-3">Process</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Mixing method and duration</li>
                <li>Placement and compaction</li>
                <li>Curing conditions and duration</li>
                <li>Temperature during setting and curing</li>
                <li>Age of concrete</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Nyati Cement's Commitment to Quality</h2>
          
          <p>
            Our commitment to quality ensures that every batch of Nyati Cement meets or exceeds the specified strength requirements:
          </p>
          
          <ul className="list-disc pl-6 mt-3 mb-6">
            <li>Regular testing at multiple stages of production</li>
            <li>Statistical quality control to ensure consistency</li>
            <li>Precise control of raw material properties</li>
            <li>Advanced laboratory facilities with certified technicians</li>
            <li>Continuous monitoring and documentation of results</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Recommendations for Optimal Results</h2>
          
          <p>
            To achieve the best results with Nyati Cement products:
          </p>
          
          <ol className="list-decimal pl-6 mb-6 space-y-3">
            <li>Follow proper mix design procedures</li>
            <li>Maintain strict water-cement ratio control</li>
            <li>Use quality aggregates with proper gradation</li>
            <li>Ensure thorough mixing and proper placement</li>
            <li>Implement appropriate curing methods</li>
            <li>Test samples regularly to verify performance</li>
          </ol>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Conclusion</h2>
          <p>
            Compressive strength testing is essential for ensuring the quality and reliability of concrete structures. By understanding the factors that influence compressive strength and following best practices, you can achieve optimal results in your construction projects.
          </p>
          <p className="mt-4">
            Nyati Cement is committed to providing high-quality products that consistently meet or exceed strength requirements, giving you confidence in the durability and performance of your structures.
          </p>

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
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p className="lead text-xl mb-6">
            Tunapotathmini ubora wa saruji, nguvu ya kubana ni kipimo muhimu zaidi cha utendaji. Inaonyesha mzigo gani muundo unaweza kubeba kwa usalama, inaathiri udhabiti, na ni ishara kuu ya ubora wa saruji. Katika Saruji ya Nyati, tunadumisha viwango vya juu vya upimaji vinavyozidi mahitaji ya tasnia, tukihakikisha kila mfuko unatoa utendaji bora na wa kutegemewa kwa miradi yako ya ujenzi.
          </p>
          
          <div className="relative h-96 w-full mb-8 rounded-sm overflow-hidden">
            <Image 
              src="/images/blog/compression-test.jpg" 
              alt="Mashine ya kupima nguvu ya kubana ikiwa na sampuli ya zege" 
              fill 
              className="object-cover"
              priority
            />
          </div>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Nguvu ya Kubana ni Nini?</h2>
          <p>
            Nguvu ya kubana ni mzigo wa juu zaidi ambao kifaa kinaweza kustahimili kabla ya kushindwa chini ya msukumo. Kwa zege, kwa kawaida inapimwa kwa megapascals (MPa) au pounds kwa inch mraba (psi) na kupimwa kwa kutumia msukumo unaoongezeka kwenye sampuli za zege hadi zikipasuka au kuvunjika.
          </p>
          <p className="mt-4">
            Sifa hii ya msingi inaamua uwezo wa muundo kubeba mzigo na ni ishara muhimu ya sifa nyingine muhimu ikiwa ni pamoja na udhabiti, kupenyeza, na upinzani dhidi ya hali ya hewa. Wakati zege limeundwa hasa kupinga nguvu za kubana (kinyume na nguvu za mvutano), upimaji wa nguvu ya kubana unatoa ufahamu wa utendaji wa jumla katika vigezo vingi.
          </p>

          <div className="bg-nyati-cream p-6 rounded-sm my-8">
            <h3 className="text-xl font-bold text-nyati-navy mb-3">Ukweli Muhimu:</h3>
            <p className="italic">
              Nguvu ya kubana ya zege inaweza kuwa mara 10 zaidi ya nguvu yake ya mvutano, ndiyo sababu vifaa vya kuimarisha (kama chuma cha rebar) vinatumika kufidia uwezo mdogo wa zege kuhimili mvutano.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Kwa Nini Nguvu ya Kubana ni Muhimu</h2>
          
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-sm">
              <h3 className="text-lg font-bold text-nyati-navy mb-3">Usalama wa Muundo</h3>
              <p>
                Nguvu ya kubana ya kutosha inahakikisha miundo inaweza kubeba mizigo iliyokusudiwa pamoja na mizani za ziada za usalama kukabiliana na msukumo usiotarajiwa kutoka kwa matukio ya hali ya hewa, matetemeko ya ardhi, au mabadiliko ya matumizi kwa muda.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-sm">
              <h3 className="text-lg font-bold text-nyati-navy mb-3">Kiashiria cha Udhabiti</h3>
              <p>
                Nguvu ya juu ya kubana kwa kawaida inahusiana na msongamano ulioongezeka, kupenyeza kwa chini, na upinzani mkubwa dhidi ya mashambulizi ya kemikali, mzunguko wa kuganda/kuyeyuka, na hali ya hewa kwa ujumla.
              </p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-sm">
              <h3 className="text-lg font-bold text-nyati-navy mb-3">Ufanisi wa Kiuchumi</h3>
              <p>
                Kuelewa kwa usahihi nguvu ya kubana kunaruhusu kubuni miundo bora zinazotumia vifaa kwa ufanisi, kupunguza gharama huku ikidumisha usalama na utendaji.
              </p>
            </div>
          </div>

          <p className="mt-4">
            Zaidi ya faida hizi za msingi, nguvu ya kubana pia:
          </p>
          <ul className="list-disc pl-6 mt-3 mb-6">
            <li>Inaonyesha upinzani wa zege dhidi ya msuguano na kuchakaa</li>
            <li>Inahusiana na moduli ya elasticity (ugumu)</li>
            <li>Inaathiri tabia ya kusogea (mabadiliko yanayotegemea muda)</li>
            <li>Inaathiri ukuaji na usambazaji wa nyufa</li>
            <li>Hutumika kama kipimo cha kudhibiti ubora wakati wa uzalishaji</li>
          </ul>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Jinsi Nguvu ya Kubana Inavyopimwa</h2>
          
          <p>
            Katika Saruji ya Nyati, tunafuata viwango vya kimataifa vya kupima nguvu ya kubana:
          </p>
          
          <ol className="list-decimal pl-6 mb-6 space-y-3">
            <li>
              <strong>Maandalizi ya Sampuli:</strong> Cubes za zege (150mm) au cylinders (kipenyo cha 150mm x urefu wa 300mm) zinaandaliwa kulingana na vipimo vya kawaida.
            </li>
            <li>
              <strong>Kutibu:</strong> Sampuli zinatibiwa katika mazingira yaliyodhibitiwa (joto: 20±2°C, unyevu wa hewa: ≥95%) kwa vipindi vilivyotajwa, kwa kawaida siku 3, 7, na 28.
            </li>
            <li>
              <strong>Upimaji:</strong> Sampuli zinawekwa kwenye mashine ya kupima iliyorekebishwa na kuwekewa mzigo kwa kasi iliyodhibitiwa hadi kushindwa.
            </li>
            <li>
              <strong>Hesabu:</strong> Nguvu ya kubana inahesabiwa kwa kugawanya mzigo wa juu kwa eneo la sehemu ya sampuli.
            </li>
          </ol>
          
          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Mambo Yanayoathiri Nguvu ya Kubana</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-nyati-navy mb-3">Vifaa</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Aina ya saruji na ubora</li>
                <li>Uwiano wa maji-saruji</li>
                <li>Ubora wa kokoto na ukubwa</li>
                <li>Viongezwa</li>
                <li>Vifaa vya nyongeza vya saruji</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-nyati-navy mb-3">Mchakato</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Njia ya kuchanganya na muda</li>
                <li>Uwekaji na kushindilia</li>
                <li>Hali ya kutibu na muda</li>
                <li>Joto wakati wa kutulia na kutibu</li>
                <li>Umri wa zege</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Dhamira ya Saruji ya Nyati kwa Ubora</h2>
          
          <p>
            Dhamira yetu kwa ubora inahakikisha kila fungu la Saruji ya Nyati linakidhi au kuzidi mahitaji ya nguvu yaliyotajwa:
          </p>
          
          <ul className="list-disc pl-6 mt-3 mb-6">
            <li>Upimaji wa mara kwa mara katika hatua nyingi za uzalishaji</li>
            <li>Udhibiti wa ubora wa takwimu kuhakikisha uthabiti</li>
            <li>Udhibiti sahihi wa sifa za malighafi</li>
            <li>Vifaa vya maabara vya kisasa na mafundi wenye vyeti</li>
            <li>Ufuatiliaji endelevu na uwekaji wa nyaraka wa matokeo</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Mapendekezo kwa Matokeo Bora</h2>
          
          <p>
            Ili kupata matokeo bora kwa bidhaa za Saruji ya Nyati:
          </p>
          
          <ol className="list-decimal pl-6 mb-6 space-y-3">
            <li>Fuata taratibu sahihi za kubuni mchanganyiko</li>
            <li>Dumisha udhibiti mkali wa uwiano wa maji-saruji</li>
            <li>Tumia kokoto za ubora na mpangilio sahihi</li>
            <li>Hakikisha kuchanganya kwa kina na uwekaji sahihi</li>
            <li>Tekeleza mbinu sahihi za kutibu</li>
            <li>Pima sampuli mara kwa mara kuthibitisha utendaji</li>
          </ol>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Hitimisho</h2>
          <p>
            Upimaji wa nguvu ya kubana ni muhimu kwa kuhakikisha ubora na utegemezi wa miundo ya zege. Kwa kuelewa mambo yanayoathiri nguvu ya kubana na kufuata mbinu bora, unaweza kupata matokeo bora katika miradi yako ya ujenzi.
          </p>
          <p className="mt-4">
            Saruji ya Nyati imejitolea kutoa bidhaa za ubora wa juu ambazo kila wakati zinakidhi au kuzidi mahitaji ya nguvu, kukupa imani katika udhabiti na utendaji wa miundo yako.
          </p>

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
        </React.Fragment>
      )}
    </BlogPost>
  );
}