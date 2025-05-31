// components/sections/HomeBuilderSection.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from '@/app/hooks/useTranslations';

const HomeBuilderSection = () => {
  const { t } = useTranslations();
  
  return (
    <div className="bg-white">
      {/* Top Navigation Bar */}
      <div className="bg-nyati-orange text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 py-3">
            <Link href="/for-home-builders" className="font-medium border-b-2 border-white">
              {t('homeBuilder.forHomeBuilders')}
            </Link>
            <Link href="/for-infrastructure" className="font-medium hover:border-b-2 hover:border-white transition-all">
              {t('homeBuilder.forInfrastructure')}
            </Link>
            <Link href="/for-commercial" className="font-medium hover:border-b-2 hover:border-white transition-all">
              {t('homeBuilder.forCommercial')}
            </Link>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-nyati-navy mb-4 animate-fade-in">{t('homeBuilder.title')}</h1>
        <h2 className="text-2xl text-nyati-grey mb-6 animate-slide-up">{t('homeBuilder.subtitle')}</h2>
        <p className="text-lg max-w-4xl animate-slide-up">
          {t('homeBuilder.description')}
        </p>
      </div>

      {/* Main Interactive Section */}
      <div className="container mx-auto px-4 py-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interactive Building Visualization */}
          <div className="relative rounded-xl overflow-hidden h-[600px] shadow-strong animate-scale-in">
            <Image 
              src="/images/home-building/house-construction-stages.jpg"
              alt="Home construction stages with Nyati Cement"
              fill
              className="object-cover"
            />
            
            {/* Interactive Hotspots */}
            <div className="absolute top-1/4 left-1/4 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-nyati-orange flex items-center justify-center border-2 border-white animate-float">
                <span className="text-white font-bold">1</span>
              </div>
              
              {/* Popup for Foundation */}
              <div className="absolute top-full left-0 mt-2 bg-white shadow-strong rounded-lg p-4 w-64 z-10 hidden group-hover:block transition-all">
                <h4 className="font-bold text-nyati-navy mb-2">{t('homeBuilder.strongFoundations')}</h4>
                <p className="text-sm text-nyati-grey mb-2">{t('homeBuilder.strongFoundationsDescription')}</p>
                <Link href="/guides/foundation" className="text-nyati-orange text-sm font-medium">
                  {t('homeBuilder.learnMore')} →
                </Link>
              </div>
            </div>

            <div className="absolute top-1/2 right-1/3 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-nyati-orange flex items-center justify-center border-2 border-white animate-float" style={{animationDelay: "1s"}}>
                <span className="text-white font-bold">2</span>
              </div>
              
              {/* Popup for Walls */}
              <div className="absolute top-full left-0 mt-2 bg-white shadow-strong rounded-lg p-4 w-64 z-10 hidden group-hover:block transition-all">
                <h4 className="font-bold text-nyati-navy mb-2">{t('homeBuilder.wallConstruction')}</h4>
                <p className="text-sm text-nyati-grey mb-2">{t('homeBuilder.wallConstructionDescription')}</p>
                <Link href="/guides/walls" className="text-nyati-orange text-sm font-medium">
                  {t('homeBuilder.learnMore')} →
                </Link>
              </div>
            </div>

            <div className="absolute bottom-1/3 right-1/4 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-nyati-orange flex items-center justify-center border-2 border-white animate-float" style={{animationDelay: "2s"}}>
                <span className="text-white font-bold">3</span>
              </div>
              
              {/* Popup for Finishing */}
              <div className="absolute top-full left-0 mt-2 bg-white shadow-strong rounded-lg p-4 w-64 z-10 hidden group-hover:block transition-all">
                <h4 className="font-bold text-nyati-navy mb-2">{t('homeBuilder.finishingTouches')}</h4>
                <p className="text-sm text-nyati-grey mb-2">{t('homeBuilder.finishingTouchesDescription')}</p>
                <Link href="/guides/finishing" className="text-nyati-orange text-sm font-medium">
                  {t('homeBuilder.learnMore')} →
                </Link>
              </div>
            </div>
          </div>

          {/* Building Stages Guide */}
          <div className="bg-nyati-light-grey rounded-xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-nyati-navy mb-6">{t('homeBuilder.yourHomeBuildingJourney')}</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-strong transition-all">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-nyati-orange font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-nyati-navy text-lg mb-2">{t('homeBuilder.foundationAndStructure')}</h4>
                    <p className="text-nyati-grey mb-3">{t('homeBuilder.foundationAndStructureDescription')}</p>
                    <Link href="/guides/foundation" className="text-nyati-orange font-medium text-sm flex items-center">
                      {t('homeBuilder.foundationGuide')}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-strong transition-all">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-nyati-orange font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-nyati-navy text-lg mb-2">{t('homeBuilder.wallsAndColumns')}</h4>
                    <p className="text-nyati-grey mb-3">{t('homeBuilder.wallsAndColumnsDescription')}</p>
                    <Link href="/guides/walls-columns" className="text-nyati-orange font-medium text-sm flex items-center">
                      {t('homeBuilder.wallConstructionGuide')}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-strong transition-all">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-nyati-orange font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-nyati-navy text-lg mb-2">{t('homeBuilder.roofAndFinishing')}</h4>
                    <p className="text-nyati-grey mb-3">{t('homeBuilder.roofAndFinishingDescription')}</p>
                    <Link href="/guides/finishing" className="text-nyati-orange font-medium text-sm flex items-center">
                      {t('homeBuilder.finishingTouchesGuide')}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-strong transition-all">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-nyati-orange font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-nyati-navy text-lg mb-2">{t('homeBuilder.maintenanceAndCare')}</h4>
                    <p className="text-nyati-grey mb-3">{t('homeBuilder.maintenanceAndCareDescription')}</p>
                    <Link href="/guides/maintenance" className="text-nyati-orange font-medium text-sm flex items-center">
                      {t('homeBuilder.maintenanceGuide')}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link 
                href="/home-building-guide" 
                className="bg-nyati-orange hover:bg-nyati-navy text-white py-3 px-6 rounded-lg font-medium inline-flex items-center transition-colors"
              >
                {t('homeBuilder.completeHomeBuildingGuide')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Resources Section */}
      <div className="bg-nyati-cream py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-nyati-navy mb-8">{t('homeBuilder.essentialHomeBuildingResources')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Resource Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-all">
              <div className="relative h-48">
                <Image 
                  src="/images/home-building/cement-calculator.jpg"
                  alt="Cement calculator"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-nyati-navy text-xl mb-2">{t('homeBuilder.cementCalculator')}</h3>
                <p className="text-nyati-grey mb-4">{t('homeBuilder.cementCalculatorDescription')}</p>
                <Link 
                  href="/tools/cement-calculator" 
                  className="text-nyati-orange font-medium flex items-center"
                >
                  {t('homeBuilder.calculateMaterials')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Resource Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-all">
              <div className="relative h-48">
                <Image 
                  src="/images/home-building/product-guide.jpg"
                  alt="Nyati product guide"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-nyati-navy text-xl mb-2">{t('homeBuilder.productSelectionGuide')}</h3>
                <p className="text-nyati-grey mb-4">{t('homeBuilder.productSelectionGuideDescription')}</p>
                <Link 
                  href="/guides/product-selection" 
                  className="text-nyati-orange font-medium flex items-center"
                >
                  {t('homeBuilder.chooseTheRightCement')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Resource Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-all">
              <div className="relative h-48">
                <Image 
                  src="/images/home-building/expert-tips.jpg"
                  alt="Expert construction tips"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-nyati-navy text-xl mb-2">{t('homeBuilder.expertTipsAndTechniques')}</h3>
                <p className="text-nyati-grey mb-4">{t('homeBuilder.expertTipsAndTechniquesDescription')}</p>
                <Link 
                  href="/guides/expert-tips" 
                  className="text-nyati-orange font-medium flex items-center"
                >
                  {t('homeBuilder.viewExpertAdvice')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Tutorials Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-nyati-navy">{t('homeBuilder.videoTutorials')}</h2>
          <Link 
            href="/videos" 
            className="text-nyati-orange font-medium flex items-center"
          >
            {t('homeBuilder.viewAllVideos')}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Video Card 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-all">
            <div className="relative h-48 group">
              <Image 
                src="/images/home-building/video-foundation.jpg"
                alt="Foundation construction video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all">
                <div className="w-16 h-16 rounded-full bg-nyati-orange flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-nyati-navy text-xl mb-2">{t('homeBuilder.perfectFoundationTechniques')}</h3>
              <p className="text-nyati-grey">{t('homeBuilder.perfectFoundationTechniquesDescription')}</p>
              <div className="flex items-center mt-4 text-sm text-nyati-grey">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-nyati-orange" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                8:24
              </div>
            </div>
          </div>

          {/* Video Card 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-all">
            <div className="relative h-48 group">
              <Image 
                src="/images/home-building/video-mixing.jpg"
                alt="Cement mixing video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all">
                <div className="w-16 h-16 rounded-full bg-nyati-orange flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-nyati-navy text-xl mb-2">{t('homeBuilder.perfectCementMixingRatios')}</h3>
              <p className="text-nyati-grey">{t('homeBuilder.perfectCementMixingRatiosDescription')}</p>
              <div className="flex items-center mt-4 text-sm text-nyati-grey">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-nyati-orange" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                6:42
              </div>
            </div>
          </div>

          {/* Video Card 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-all">
            <div className="relative h-48 group">
              <Image 
                src="/images/home-building/video-finishing.jpg"
                alt="Wall finishing video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all">
                <div className="w-16 h-16 rounded-full bg-nyati-orange flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-nyati-navy text-xl mb-2">{t('homeBuilder.wallPlasteringTechniques')}</h3>
              <p className="text-nyati-grey">{t('homeBuilder.wallPlasteringTechniquesDescription')}</p>
              <div className="flex items-center mt-4 text-sm text-nyati-grey">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-nyati-orange" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                12:18
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expert Assistance Section */}
      <div className="bg-nyati-navy py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">{t('homeBuilder.needExpertAssistance')}</h2>
              <p className="text-nyati-orange text-xl mb-6">{t('homeBuilder.ourTeamOfConstructionExperts')}</p>
              <p className="text-white mb-8">
                {t('homeBuilder.expertGuidanceDescription')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="bg-nyati-orange hover:bg-nyati-navy text-white py-3 px-6 rounded-lg font-medium transition-colors"
                >
                  {t('homeBuilder.contactOurExperts')}
                </Link>
                <Link 
                  href="/dealer-locator" 
                  className="bg-white hover:bg-gray-100 text-nyati-navy py-3 px-6 rounded-lg font-medium transition-colors"
                >
                  {t('homeBuilder.findADealerNearYou')}
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-strong">
              <Image 
                src="/images/home-building/expert-assistance.jpg"
                alt="Nyati Cement experts providing assistance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBuilderSection;