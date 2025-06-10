// app/blog/tanzania-infrastructure-boom/page.js
'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BlogPostWrapper } from '../../components/BlogPostWrapper'
import BlogPost from '../../components/BlogPost'
import { useLanguage } from '../../contexts/LanguageContext'

// Related posts for this article
const relatedPosts = {
  en: [
    {
      title: 'Building Your Dream Home: How to Choose the Right Cement',
      excerpt: 'A comprehensive guide to selecting the best cement for your residential construction project.',
      category: 'Homeowner Tips',
      date: 'May 15, 2025',
      readTime: '6 min read',
      slug: '/blog/building-your-dream-home'
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
      title: 'Kujenga Nyumba Yako ya Ndoto: Jinsi ya Kuchagua Saruji Sahihi',
      excerpt: 'Mwongozo kamili wa kuchagua saruji bora kwa mradi wako wa ujenzi wa makazi.',
      category: 'Vidokezo kwa Wamiliki wa Nyumba',
      date: 'Mei 15, 2025',
      readTime: 'Dakika 6 za kusoma',
      slug: '/blog/building-your-dream-home'
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

export default function TanzaniaInfrastructureBoomPage() {
  const { language } = useLanguage();
  
  return (
    <BlogPost 
      title="Tanzania's Infrastructure Boom: The Role of Quality Cement in Nation Building"
      titleSw="Ukuaji wa Miundombinu Tanzania: Umuhimu wa Saruji Bora katika Ujenzi wa Taifa"
      date="April 3, 2025"
      dateSw="Aprili 3, 2025"
      author="Nyati Cement Industry Analysis Team"
      authorSw="Timu ya Uchambuzi wa Sekta ya Saruji ya Nyati"
      category="Industry Insights"
      categorySw="Ufahamu wa Tasnia"
      readTime="5 min read"
      readTimeSw="Dakika 5 za kusoma"
      relatedPosts={relatedPosts}
    >
      {language === 'en' ? (
        <React.Fragment>
          <p className="lead text-xl mb-6">
            Tanzania is experiencing significant infrastructure development that is transforming the nation's economic landscape. From railway projects to port expansions and hydropower stations, the country is investing in foundations for future economic growth. At the heart of these developments lies a critical component: quality cement.
          </p>

          <div className="my-6 rounded-sm overflow-hidden relative aspect-w-16 aspect-h-9">
            <Image
              src="/images/blog/bridge.jpg"
              alt="Tanzania's modern infrastructure development"
              width={1200}
              height={675}
              className="object-cover rounded-sm"
            />
          </div>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Tanzania's Infrastructure Development</h2>
          <p>
            Tanzania's development strategy includes major infrastructure investments that aim to enhance economic growth through improved transportation networks, increased energy generation capacity, and modern urban development.
          </p>
          
          <p className="mt-4">
            Notable projects include:
          </p>
          <ul className="list-disc pl-6 mt-3 mb-6 space-y-2">
            <li>The Standard Gauge Railway connecting Dar es Salaam to inland regions</li>
            <li>Port expansions at Dar es Salaam and other coastal locations</li>
            <li>The Julius Nyerere Hydropower Station on the Rufiji River</li>
            <li>Road construction and rehabilitation projects</li>
            <li>Industrial parks and economic development zones</li>
          </ul>

          <div className="bg-nyati-cream p-6 rounded-sm my-6">
            <h3 className="text-xl font-bold text-nyati-navy mb-3">Infrastructure Development in Tanzania</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center bg-white p-4 rounded-sm shadow-sm">
                <div className="text-base font-bold text-nyati-orange mb-1">Major</div>
                <div className="text-sm text-nyati-dark-grey">Infrastructure investments</div>
              </div>
              <div className="text-center bg-white p-4 rounded-sm shadow-sm">
                <div className="text-base font-bold text-nyati-orange mb-1">Multiple</div>
                <div className="text-sm text-nyati-dark-grey">Large-scale projects</div>
              </div>
              <div className="text-center bg-white p-4 rounded-sm shadow-sm">
                <div className="text-base font-bold text-nyati-orange mb-1">Thousands</div>
                <div className="text-sm text-nyati-dark-grey">Jobs created</div>
              </div>
              <div className="text-center bg-white p-4 rounded-sm shadow-sm">
                <div className="text-base font-bold text-nyati-orange mb-1">Significant</div>
                <div className="text-sm text-nyati-dark-grey">Cement demand</div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Key Infrastructure Projects</h2>
          
          <div className="my-6 space-y-6">
            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="md:col-span-1 bg-gray-100 flex items-center justify-center p-4">
                  <div className="relative h-48 w-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/images/blog/sgr.jpg"
                        alt="Standard Railway Gauge"
                        width={1200}
                        height={675}
                        className="object-cover rounded-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="text-xl font-bold text-nyati-navy mb-2">Standard Gauge Railway (SGR)</h3>
                  <p className="text-nyati-dark-grey mb-3">
                    The Standard Gauge Railway project aims to connect the port of Dar es Salaam to inland regions, enhancing transportation infrastructure and economic connectivity within Tanzania and with neighboring countries.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-nyati-navy text-sm">Project Type:</h4>
                      <p className="text-sm">Transportation Infrastructure</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-nyati-navy text-sm">Cement Application:</h4>
                      <p className="text-sm">Foundations, bridges, stations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="md:col-span-1 bg-gray-100 flex items-center justify-center p-4">
                  <div className="relative h-48 w-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/images/blog/nyereredam.jpg"
                      alt="Julius Nyerere Hydropower Plant"
                      width={1200}
                      height={675}
                      className="object-cover rounded-sm"
                    />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="text-xl font-bold text-nyati-navy mb-2">Julius Nyerere Hydropower Station</h3>
                  <p className="text-nyati-dark-grey mb-3">
                    This hydropower project on the Rufiji River represents a significant investment in Tanzania's power generation capacity, aiming to provide electricity to support the country's industrialization efforts.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-nyati-navy text-sm">Project Type:</h4>
                      <p className="text-sm">Energy Infrastructure</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-nyati-navy text-sm">Cement Application:</h4>
                      <p className="text-sm">Dam structure, power facilities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Why Cement Quality Matters in Infrastructure</h2>
          
          <div className="grid md:grid-cols-3 gap-6 my-6">
            <div className="bg-white rounded-sm shadow-sm p-6">
              <div className="w-12 h-12 rounded-full bg-nyati-orange/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-nyati-navy mb-3">Infrastructure Longevity</h3>
              <p className="text-nyati-dark-grey">
                Quality cement contributes to longer-lasting infrastructure. Higher-grade cement may increase initial costs but generally results in more durable structures that require less maintenance over time, extending the service life of critical infrastructure.
              </p>
            </div>
            
            <div className="bg-white rounded-sm shadow-sm p-6">
              <div className="w-12 h-12 rounded-full bg-nyati-orange/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-nyati-navy mb-3">Safety and Reliability</h3>
              <p className="text-nyati-dark-grey">
                High-quality cement provides the necessary strength, durability, and resistance to environmental factors needed to ensure infrastructure safety. This is particularly important for structures that must withstand challenging environmental conditions.
              </p>
            </div>
            
            <div className="bg-white rounded-sm shadow-sm p-6">
              <div className="w-12 h-12 rounded-full bg-nyati-orange/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-nyati-navy mb-3">Economic Efficiency</h3>
              <p className="text-nyati-dark-grey">
                Infrastructure projects represent significant investments. Using quality materials helps ensure these investments deliver their intended benefits by reducing the likelihood of premature deterioration and costly repairs.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Technical Requirements for Infrastructure Cement</h2>
          
          <div className="bg-white p-6 rounded-sm shadow-sm my-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-nyati-navy mb-2">Strength Development</h4>
                <p className="text-nyati-dark-grey">
                  Infrastructure projects typically require cement that delivers both early strength for efficient construction processes and high ultimate strength for long-term structural performance. Different infrastructure applications may have specific strength requirements based on their intended use and expected loads.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-nyati-navy mb-2">Durability Factors</h4>
                <p className="text-nyati-dark-grey mb-3">
                  Key durability considerations include:
                </p>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>Resistance to water and chemical penetration</li>
                  <li>Sulfate resistance for underground structures</li>
                  <li>Chloride resistance for coastal applications</li>
                  <li>Protection against steel reinforcement corrosion</li>
                  <li>Heat of hydration management for massive structures</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Nyati Cement's Infrastructure Solutions</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-nyati-navy mb-3">Our Infrastructure-Grade Products</h3>
                <p className="text-nyati-dark-grey mb-4">
                  Nyati Cement offers products engineered for infrastructure applications:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Nyati Duramx 42:</strong> High-performance cement with high ultimate strength (42.5 MPa), ideal for high grade concrete and applications requiring superior durability
                  </li>
                  <li>
                    <strong>Nyati Premium OPC:</strong> Premium cement with rapid high early strength ensuring long-lasting results for critical projects.
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-nyati-navy mb-3">Infrastructure Applications</h3>
                <p className="text-nyati-dark-grey mb-4">
                  Our cement products are suitable for various infrastructure components:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Transportation:</strong> Railways, highways, bridges, and airport facilities
                  </li>
                  <li>
                    <strong>Energy:</strong> Power generation structures and distribution networks
                  </li>
                  <li>
                    <strong>Water:</strong> Water supply systems and management facilities
                  </li>
                  <li>
                    <strong>Public Facilities:</strong> Schools, hospitals, and government buildings
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">The Value of Quality Cement</h2>
          
          <div className="bg-white rounded-sm shadow-sm overflow-hidden my-6">
            <div className="p-6">
              <h3 className="text-xl font-bold text-nyati-navy mb-4">Understanding Life-Cycle Benefits</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-nyati-navy mb-2">Standard-Grade Cement Approach</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Lower initial material costs</li>
                    <li>Potential for earlier degradation</li>
                    <li>More frequent maintenance requirements</li>
                    <li>Shorter expected service life</li>
                    <li>Higher lifetime maintenance expenses</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-nyati-navy mb-2">Premium-Grade Cement Approach</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Higher initial material investment</li>
                    <li>Greater resistance to deterioration</li>
                    <li>Reduced maintenance frequency</li>
                    <li>Extended service life expectancy</li>
                    <li>Lower lifetime maintenance costs</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-nyati-dark-grey">
                  When calculating the total cost of ownership over the entire life of an infrastructure project, premium-grade cement often provides a more economical solution despite the higher initial investment.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Conclusion: Supporting Tanzania's Development</h2>
          <p>
            Tanzania's infrastructure development represents an important investment in the nation's future prosperity. The quality of construction materials, particularly cement, plays a significant role in determining how well these investments will serve their intended purposes over time.
          </p>
          <p className="mt-4">
            By providing high-quality cement products engineered specifically for infrastructure applications, Nyati Cement contributes to Tanzania's development efforts and helps ensure that today's infrastructure investments deliver lasting value.
          </p>

          <div className="bg-nyati-orange/10 p-6 rounded-sm my-6 border-l-4 border-nyati-orange">
            <h3 className="text-xl font-bold text-nyati-navy mb-3">Nyati Cement: Supporting Tanzania's Infrastructure</h3>
            <p>
              Nyati Cement is committed to providing high-quality materials for Tanzania's infrastructure development. Our specialized cement products are engineered to meet the demanding requirements of construction projects throughout the country.
            </p>
            <div className="flex justify-center mt-4">
              <Link 
                href="/products" 
                className="bg-nyati-orange hover:bg-nyati-navy text-white font-medium px-6 py-3 rounded-sm transition-colors inline-flex items-center"
              >
                Explore Our Products
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p className="lead text-xl mb-6">
            Tanzania inapitia maendeleo makubwa ya miundombinu yanayobadilisha mandhari ya uchumi wa taifa. Kutoka miradi ya reli hadi upanuzi wa bandari na vituo vya umeme wa maji, nchi inawekeza kwenye misingi ya ukuaji wa uchumi wa baadaye. Katika moyo wa maendeleo haya kuna kipengele muhimu: saruji bora.
          </p>

          <div className="my-6 rounded-sm overflow-hidden relative aspect-w-16 aspect-h-9">
            <Image
              src="/images/blog/bridge.jpg"
              alt="Maendeleo ya kisasa ya miundombinu Tanzania"
              width={1200}
              height={675}
              className="object-cover rounded-sm"
            />
          </div>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Maendeleo ya Miundombinu Tanzania</h2>
          <p>
            Mkakati wa maendeleo wa Tanzania unajumuisha uwekezaji mkubwa wa miundombinu unaolenga kuongeza ukuaji wa uchumi kupitia mtandao bora wa usafiri, uwezo mkubwa wa uzalishaji wa nishati, na maendeleo ya kisasa ya mijini.
          </p>
          
          <p className="mt-4">
            Miradi inayojulikana ni pamoja na:
          </p>
          <ul className="list-disc pl-6 mt-3 mb-6 space-y-2">
            <li>Reli ya Standard Gauge inayounganisha Dar es Salaam na mikoa ya ndani</li>
            <li>Upanuzi wa bandari Dar es Salaam na maeneo mengine ya pwani</li>
            <li>Kituo cha Umeme wa Maji cha Julius Nyerere kwenye Mto Rufiji</li>
            <li>Miradi ya ujenzi na ukarabati wa barabara</li>
            <li>Viwanda na maeneo ya maendeleo ya kiuchumi</li>
          </ul>

          <div className="bg-nyati-cream p-6 rounded-sm my-6">
            <h3 className="text-xl font-bold text-nyati-navy mb-3">Maendeleo ya Miundombinu Tanzania</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center bg-white p-4 rounded-sm shadow-sm">
                <div className="text-base font-bold text-nyati-orange mb-1">Mikubwa</div>
                <div className="text-sm text-nyati-dark-grey">Uwekezaji wa miundombinu</div>
              </div>
              <div className="text-center bg-white p-4 rounded-sm shadow-sm">
                <div className="text-base font-bold text-nyati-orange mb-1">Mingi</div>
                <div className="text-sm text-nyati-dark-grey">Miradi mikubwa</div>
              </div>
              <div className="text-center bg-white p-4 rounded-sm shadow-sm">
                <div className="text-base font-bold text-nyati-orange mb-1">Maelfu</div>
                <div className="text-sm text-nyati-dark-grey">Ajira zilizotengenezwa</div>
              </div>
              <div className="text-center bg-white p-4 rounded-sm shadow-sm">
                <div className="text-base font-bold text-nyati-orange mb-1">Muhimu</div>
                <div className="text-sm text-nyati-dark-grey">Mahitaji ya saruji</div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Miradi Muhimu ya Miundombinu</h2>
          
          <div className="my-6 space-y-6">
            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="md:col-span-1 bg-gray-100 flex items-center justify-center p-4">
                  <div className="relative h-48 w-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/images/blog/sgr.jpg"
                        alt="Reli ya Standard Gauge"
                        width={1200}
                        height={675}
                        className="object-cover rounded-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="text-xl font-bold text-nyati-navy mb-2">Reli ya Standard Gauge (SGR)</h3>
                  <p className="text-nyati-dark-grey mb-3">
                    Mradi wa Reli ya Standard Gauge unalenga kuunganisha bandari ya Dar es Salaam na mikoa ya ndani, kuboresha miundombinu ya usafiri na muunganiko wa kiuchumi ndani ya Tanzania na nchi jirani.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-nyati-navy text-sm">Aina ya Mradi:</h4>
                      <p className="text-sm">Miundombinu ya Usafiri</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-nyati-navy text-sm">Matumizi ya Saruji:</h4>
                      <p className="text-sm">Misingi, madaraja, vituo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="md:col-span-1 bg-gray-100 flex items-center justify-center p-4">
                  <div className="relative h-48 w-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/images/blog/nyereredam.jpg"
                      alt="Kituo cha Umeme wa Maji cha Julius Nyerere"
                      width={1200}
                      height={675}
                      className="object-cover rounded-sm"
                    />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="text-xl font-bold text-nyati-navy mb-2">Kituo cha Umeme wa Maji cha Julius Nyerere</h3>
                  <p className="text-nyati-dark-grey mb-3">
                    Mradi huu wa umeme wa maji kwenye Mto Rufiji ni uwekezaji muhimu katika uwezo wa uzalishaji umeme wa Tanzania, unaolenga kutoa umeme kusaidia juhudi za viwanda za nchi.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-nyati-navy text-sm">Aina ya Mradi:</h4>
                      <p className="text-sm">Miundombinu ya Nishati</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-nyati-navy text-sm">Matumizi ya Saruji:</h4>
                      <p className="text-sm">Muundo wa bwawa, vifaa vya umeme</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Kwa Nini Ubora wa Saruji ni Muhimu katika Miundombinu</h2>
          
          <div className="grid md:grid-cols-3 gap-6 my-6">
            <div className="bg-white rounded-sm shadow-sm p-6">
              <div className="w-12 h-12 rounded-full bg-nyati-orange/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-nyati-navy mb-3">Kudumu kwa Miundombinu</h3>
              <p className="text-nyati-dark-grey">
                Saruji bora huchangia miundombinu inayodumu kwa muda mrefu. Saruji ya daraja la juu inaweza kuongeza gharama za awali lakini kwa ujumla husababisha miundo imara zaidi inayohitaji matengenezo machache kwa muda mrefu, hivyo kuongeza muda wa matumizi wa miundombinu muhimu.
              </p>
            </div>
            
            <div className="bg-white rounded-sm shadow-sm p-6">
              <div className="w-12 h-12 rounded-full bg-nyati-orange/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-nyati-navy mb-3">Usalama na Utegemezi</h3>
              <p className="text-nyati-dark-grey">
                Saruji ya ubora wa juu hutoa nguvu, udhabiti, na upinzani dhidi ya hali za mazingira unaohitajika kuhakikisha usalama wa miundombinu. Hii ni muhimu hasa kwa miundo inayopaswa kustahimili mazingira magumu.
              </p>
            </div>
            
            <div className="bg-white rounded-sm shadow-sm p-6">
              <div className="w-12 h-12 rounded-full bg-nyati-orange/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-nyati-navy mb-3">Ufanisi wa Kiuchumi</h3>
              <p className="text-nyati-dark-grey">
                Miradi ya miundombinu inawakilisha uwekezaji mkubwa. Kutumia vifaa bora husaidia kuhakikisha uwekezaji huu unaleta faida zilizokusudiwa kwa kupunguza uwezekano wa uharibifu wa mapema na matengenezo ya gharama kubwa.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Mahitaji ya Kiufundi kwa Saruji ya Miundombinu</h2>
          
          <div className="bg-white p-6 rounded-sm shadow-sm my-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-nyati-navy mb-2">Ukuaji wa Nguvu</h4>
                <p className="text-nyati-dark-grey">
                  Miradi ya miundombinu kwa kawaida inahitaji saruji inayotoa nguvu ya mapema kwa mchakato wa ujenzi unaofaa na nguvu ya juu ya mwisho kwa utendaji wa muundo wa muda mrefu. Matumizi tofauti ya miundombinu yanaweza kuwa na mahitaji maalum ya nguvu kulingana na matumizi yaliyokusudiwa na mizigo inayotarajiwa.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-nyati-navy mb-2">Sababu za Udhabiti</h4>
                <p className="text-nyati-dark-grey mb-3">
                  Masuala muhimu ya udhabiti ni pamoja na:
                </p>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>Upinzani dhidi ya maji na kemikali</li>
                  <li>Upinzani wa sulfate kwa miundo ya chini ya ardhi</li>
                  <li>Upinzani wa chumvi kwa matumizi ya pwani</li>
                  <li>Ulinzi dhidi ya kutu kwa chuma</li>
                  <li>Usimamizi wa joto wakati wa kuganda kwa miundo mikubwa</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Suluhisho za Miundombinu za Saruji ya Nyati</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-nyati-navy mb-3">Bidhaa Zetu za Kiwango cha Miundombinu</h3>
                <p className="text-nyati-dark-grey mb-4">
                  Saruji ya Nyati inatoa bidhaa zilizotengenezwa kwa matumizi ya miundombinu:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Nyati Duramx 42:</strong> Saruji ya utendaji wa juu yenye nguvu ya juu ya mwisho (42.5 MPa), inafaa kwa zege la daraja la juu na matumizi yanayohitaji udhabiti bora
                  </li>
                  <li>
                    <strong>Nyati Premium OPC:</strong> Saruji bora yenye nguvu ya juu ya mapema inayohakikisha matokeo ya kudumu kwa miradi muhimu.
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-nyati-navy mb-3">Matumizi ya Miundombinu</h3>
                <p className="text-nyati-dark-grey mb-4">
                  Bidhaa zetu za saruji zinafaa kwa vipengele mbalimbali vya miundombinu:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Usafirishaji:</strong> Reli, barabara kuu, madaraja, na vifaa vya viwanja vya ndege
                  </li>
                  <li>
                    <strong>Nishati:</strong> Miundo ya uzalishaji wa nishati na mitandao ya usambazaji
                  </li>
                  <li>
                    <strong>Maji:</strong> Mifumo ya usambazaji wa maji na vifaa vya usimamizi
                  </li>
                  <li>
                    <strong>Vifaa vya Umma:</strong> Shule, hospitali, na majengo ya serikali
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Thamani ya Saruji Bora</h2>
          
          <div className="bg-white rounded-sm shadow-sm overflow-hidden my-6">
            <div className="p-6">
              <h3 className="text-xl font-bold text-nyati-navy mb-4">Kuelewa Faida za Mzunguko wa Maisha</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-nyati-navy mb-2">Mbinu ya Saruji ya Kiwango cha Kawaida</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Gharama za awali za vifaa ndogo</li>
                    <li>Uwezekano wa uharibifu wa mapema</li>
                    <li>Mahitaji ya matengenezo ya mara kwa mara</li>
                    <li>Muda wa matumizi mfupi</li>
                    <li>Gharama za juu za matengenezo kwa maisha yote</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-nyati-navy mb-2">Mbinu ya Saruji ya Kiwango cha Juu</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Uwekezaji wa juu wa vifaa vya awali</li>
                    <li>Upinzani  dhidi ya uharibifu</li>
                    <li>Mara chache za matengenezo</li>
                    <li>Muda mrefu wa matumizi</li>
                    <li>Gharama ndogo za matengenezo kwa maisha yote</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-nyati-dark-grey">
                  Unapohesabu gharama kamili ya umiliki kwa maisha yote ya mradi wa miundombinu, saruji ya daraja la juu mara nyingi hutoa suluhisho la kiuchumi zaidi licha ya uwekezaji wa juu wa awali.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-nyati-navy mt-8 mb-4">Hitimisho: Kusaidia Maendeleo ya Tanzania</h2>
          <p>
            Maendeleo ya miundombinu ya Tanzania yanawakilisha uwekezaji muhimu katika ustawi wa baadaye wa taifa. Ubora wa vifaa vya ujenzi, hasa saruji, una jukumu muhimu katika kuamua jinsi uwekezaji huu utakavyotimiza madhumuni yake kwa muda.
          </p>
          <p className="mt-4">
            Kwa kutoa bidhaa za saruji za ubora wa juu zilizotengenezwa mahsusi kwa matumizi ya miundombinu, Saruji ya Nyati inachangia juhudi za maendeleo ya Tanzania na husaidia kuhakikisha kuwa uwekezaji wa miundombinu wa leo unaleta thamani ya kudumu.
          </p>

          <div className="bg-nyati-orange/10 p-6 rounded-sm my-6 border-l-4 border-nyati-orange">
            <h3 className="text-xl font-bold text-nyati-navy mb-3">Saruji ya Nyati: Kusaidia Miundombinu ya Tanzania</h3>
            <p>
              Saruji ya Nyati imejitolea kutoa vifaa vya ubora wa juu kwa maendeleo ya miundombinu ya Tanzania. Bidhaa zetu maalum za saruji zimetengenezwa kukidhi mahitaji magumu ya miradi ya ujenzi nchini kote.
            </p>
            <div className="flex justify-center mt-4">
              <Link 
                href="/products" 
                className="bg-nyati-orange hover:bg-nyati-navy text-white font-medium px-6 py-3 rounded-sm transition-colors inline-flex items-center"
              >
                Chunguza Bidhaa Zetu
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </React.Fragment>
      )}
    </BlogPost>
  )
}