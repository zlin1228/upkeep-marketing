import React  from 'react'
import { Link } from 'gatsby'
import { Card, Kicker, Title, CardLink, ArrowHolder, Head } from '../../styles/Components/Cards/checklistCard'
import { IoIosArrowRoundForward } from "react-icons/io"
import { IconContext } from "react-icons"


const ChecklistCard = (props) => {
    return(
            <Card count={props?.count} position={props?.position}>
                <Link to={props?.link}>
                    <Head>
                        <Kicker>{props?.kicker}</Kicker>
                        <Title count={props?.count} dangerouslySetInnerHTML={{__html: props?.title }} />
                    </Head>
                </Link>
                {
                    props?.count ? <CardLink to={props?.link}>
                    <span>View {props?.count} checklists</span>
                    <IconContext.Provider value={{ color: "#fff", className: "header-arrow", size: "2em", style: { verticalAlign: 'middle'} }}>
                        <ArrowHolder>
                            <IoIosArrowRoundForward />
                        </ArrowHolder>
                    </IconContext.Provider>
                    </CardLink> : ''
                }
            </Card>
    )
}

export default ChecklistCard