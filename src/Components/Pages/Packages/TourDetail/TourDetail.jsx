import React from 'react'
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './tourDetail.css'

import CommonSection from '../../../Shared/CommonSection/CommonSection'
import TourSlider from './TourSlider';

const TourDetail = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <section>
                <CommonSection title="Let's Travel to" />
            </section>


            <section className='tourDetail-section'>
                <Container>
                    <TourSlider />
                </Container>
            </section>

            <section className='tour-detail'>
                <Container>
                    <div class="container">
                        <div class="display">
                            <button class="standard active">Standard</button>
                            <button class="standard">Deluxe</button>
                            <button class="standard">Executive</button>
                        </div>
                    </div>


                    <Tabs
                        defaultActiveKey="description"
                        id="fill-tab-example"
                        className="mb-3"
                        fill
                    >
                        <Tab eventKey="description" title="DESCRIPTION">
                            <div className="row border g-0 rounded shadow-sm">
                                <div class="description-content">
                                    <p>Here is brief summary of our 3 days Naran Kaghan tour packages:</p>
                                    <p> <strong class="bold">Naran</strong> is a medium-sized town in upper
                                        Kaghan Valley
                                        in
                                        Mansehra District of Khyber Pakhtunkhwa province of Pakistan. It is
                                        located 119 kilometers from Mansehra city at the altitude of 2,409
                                        meters. It is located 70 kilometers from Babusar Top.</p>
                                    <p>Naran Kaghan is famous as a tourist destination, owing to its
                                        pleasant
                                        weather in peak season every year thousands of tourists rush to
                                        explore
                                        the valley. It is also the gateway to Gilgit Hunza in Summers by
                                        Babusar
                                        Pass. Naran Bazaar is very crowded in the summers with hotels and
                                        restaurants offering their services. In 2020, the government expects
                                        that 5 million tourists will explore the valley.</p>
                                    <p><b>Kaghan Valley</b> is an high mountains valley located in
                                        the Mansehra
                                        District of <a title="Khyber Pakhtunkhwa"
                                            href="https://en.wikipedia.org/wiki/Khyber_Pakhtunkhwa">Khyber
                                            Pakhtunkhwa</a>, Pakistan.<sup id="cite_ref-1"
                                                class="reference"></sup><sup id="cite_ref-2"
                                                    class="reference"></sup><sup id="cite_ref-3"
                                                        class="reference"></sup> The valley covers a distance of 155
                                        kilometers (96 mi)<sup id="cite_ref-4"
                                            class="reference"></sup> across northern Pakistan, rising from
                                        its
                                        lowest elevation of 650 m (2,134 ft.) to its highest point at
                                        the Babusar Pass around 4,170 m (13,690 ft.). Landslides triggered
                                        by
                                        the devastating 2005 Kashmir earthquake destroyed many passes
                                        leading
                                        into the valley, though roads have since been largely rebuilt. The
                                        Kaghan is a highly popular tourist attraction.</p>
                                    <p><strong class="bold">Saiful Muluk</strong> is a mountainous lake
                                        located at the
                                        northern end of the Kaghan Valley, near the town of Naran in the
                                        Saiful
                                        Muluk National Park. The lake is a source of the Kunhar River. At an
                                        elevation of 3,224 m above sea level, the lake is located above the
                                        tree
                                        line and is one of the highest lakes in Pakistan.</p>
                                    <p><strong class="bold">Places Covered</strong></p>
                                    <p>Balakot, Kuwai Water Fall, Shogran, Siri Paye, Naran Bazar,
                                        Saif-ul-Malook, Batakundi, Jhalkhud, Lulusar Lake, Basal, Sight
                                        Sighing
                                        of Gidi Das Meadow, Babusar Top</p>
                                    <p><strong class="bold">Inclusions</strong><br />
                                        • Latest Model Transportation<br />
                                        (AC saloon coaster or Grand cabin)<br />
                                        • Fuel, Road Tools &amp; Taxes<br />
                                        • Decent Family Hotel Accommodations<br />
                                        • Breakfasts &amp; Dinners<br />
                                        • Professional Tour Leader<br />
                                        • Jeeps from Saif-ul-Malook<br />
                                        • BBQ &amp; Bonfire Night</p>
                                    <p><strong class="bold">Exclusions</strong><br />
                                        • Any sort of Entry Tickets<br />
                                        • Extra expenses due to landslides\road blocks<br />
                                        • Lunch, and Beverages expense<br />
                                        • Horses, Ponies or Porter charges for personal luggage<br />
                                        • Medication, Evacuation &amp; Emergency Rescue<br />
                                        • Any expenses of personal nature<br />
                                        • Any item not mentioned above in Inclusions section<br />
                                        • Jeeps for Shogran and Siri Paye.<br />
                                        • Last Dinner</p>
                                </div>
                            </div>
                        </Tab>

                        <Tab eventKey="itienrary" title="ITIENRARY">
                            <div class="timeline-content">
                                <ul class="timeline">

                                    <li>
                                        <div class="direction-r">
                                            <div class="day-wrapper">
                                                <span>1</span>
                                            </div>
                                            <div class="flag-wrapper">
                                                <span class="flag">Day 0 : Departure.</span>
                                            </div>
                                            <div class="desc">
                                                <p>Departure from Lahore 10:00pm. Via GT Road / Motorways.
                                                    Short
                                                    stay on the way. Pick Member From ISB at 3:30am.</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="direction-r">
                                            <div class="day-wrapper">
                                                <span>2</span>
                                            </div>
                                            <div class="flag-wrapper">
                                                <span class="flag">Day 1 : Balakot</span>
                                            </div>
                                            <div class="desc">
                                                <p>Breakfast in Balakot 07:30am. Short Stay at Kewai
                                                    Waterfall.
                                                    Transfer to Jeep for Siri Paye. Arrival at Siri paye
                                                    &amp;
                                                    Explore Surroundings. Explore Shogran. Drive back for
                                                    Kewai.
                                                    Reached Naran. Free Time for River Rafting. Explore
                                                    Naran Bazar
                                                    at Night. Dinner at Hotel</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="direction-r">
                                            <div class="day-wrapper">
                                                <span>3</span>
                                            </div>
                                            <div class="flag-wrapper">
                                                <span class="flag">Day 2 : Naran</span>
                                            </div>
                                            <div class="desc">
                                                <p>Breakfast in Naran 06:OOam Departure For Babusar Top.
                                                    Short Stay
                                                    at Lulusar Lake. Visit Lulusar Lake &amp; Explore the
                                                    Beauty of
                                                    Lulusar Lake. Visit Babusar &amp; Explore Surroundings
                                                    (13700ft
                                                    (4,170m) Above Sea Level). Back to Naran. Dinner and
                                                    Bonfire
                                                    8:00pm.</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="direction-r">
                                            <div class="day-wrapper">
                                                <span>4</span>
                                            </div>
                                            <div class="flag-wrapper">
                                                <span class="flag">Day 3 </span>
                                            </div>
                                            <div class="desc">
                                                <p>Breakfast in Naran 7:00am. Transfer to Jeep For Saif UI
                                                    Malook.
                                                    Visit Saif ul Malook Lake. Departure for Lahore 8:00am.
                                                    Short
                                                    Stay at Kewai Waterfall. Lunch cum Dinner at Abbottabad
                                                    or
                                                    Islamabad. Departure for Lahore 3:00pm. Arrival in
                                                    Islamabad
                                                    7:00pm and Lahore till 12:00 night.</p>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </Tab>

                        <Tab eventKey="price" title="PRICE">
                            <div class="price-section">
                                <div id="price">
                                    <h2>Standard</h2>
                                    <p>Price: <span class="orange">Rs.15,000/-</span></p>
                                    <ul>
                                        <li>Naran Hills or Equivalent in Naran</li>
                                        <li>Breakfast in Balakot</li>
                                        <li>Breakfast in Naran</li>
                                        <li>Snacks while departuring</li>
                                    </ul>
                                </div>
                            </div>
                        </Tab>

                        <Tab eventKey="location" title="LOCATION">
                            {/* <div class="map-frame">
                                <p><iframe loading="lazy" style="border: 0;"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26176.987881414952!2d73.63710179749636!3d34.90335049053501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e751e0bc7c4883%3A0x75317955703e1213!2sNaran%2C%20Mansehra%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1650489135583!5m2!1sen!2s"
                                    width="600" height="450"
                                    allowfullscreen="allowfullscreen"></iframe>
                                </p>

                            </div> */}
                        </Tab>
                    </Tabs>
                </Container>
            </section>
        </>
    )
}

export default TourDetail