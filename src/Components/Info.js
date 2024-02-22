import { SearchCheck, Info, ChevronDown, ChevronRight } from 'lucide-react'
import React from 'react'

export const InfoComp = () => {
    return (
        <div className='info_components'>
            <div>
                <h1>Best Website builders in the US</h1>
            </div>
            <div className='br_line'></div>
            <div className='search_info'>
                <div className='search_info_first'>
                    <div className='search_info'>
                        <SearchCheck />
                        <p>Last Updated - February 22, 2020</p>
                    </div>
                    <div className='search_info'>

                        <Info />
                        <p>Advertising Disclosure</p>
                    </div>
                </div>
                <div className='search_info'>
                    <p>Top Relevant</p>
                    <ChevronDown />
                </div>
            </div>
            <div className='br_line'></div>
            <div className='tools'>
                <div><p>Tools</p></div>
                <div><p>AWS Builder</p></div>
                <div><p>Start Build</p></div>
                <div><p>Build Supplies</p></div>
                <div><p>Tooling</p></div>
                <div><p>BlueHosting</p></div>
            </div>
            <div className='hostings'>
                <div><p>Home</p></div>
                <div>
                    <ChevronRight />
                    <p>Hosting for all</p>
                </div>
                <div>
                    <ChevronRight />
                    <p>Hosting</p>
                </div>
                <div>
                    <ChevronRight />
                    <p>Hosting6</p>
                </div>
                <div>
                    <ChevronRight />
                    <p>Hosting5</p>
                </div>

            </div>
        </div>
    )
}
