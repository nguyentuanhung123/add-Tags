import React from "react";
import './Footer.css'
import { RiFacebookCircleLine, RiInstagramLine, RiTwitterLine } from 'react-icons/ri'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="example">
                <div className="card-example"></div>
                <div className="card-example"></div>
                <div className="card-example"></div>
                <div className="card-example"></div>
            </div>
            <div className="footer_container">
                <div className="footer_top">
                    <div className="company_info">
                        <h2 className="company_logo">Microsoft</h2>
                        <p className="company_description">
                            Vào một đêm nào đó trước chuyến đi của chúng tôi đến Kyoto và trước buổi ra mắt bộ phim [Chichiryuutei Oppai Dragon] ở
                            Thế giới Yêu quái của Kyoto, tôi đang nằm trên chiếc giường khổng lồ của mình và—chuyện gì đã xảy ra! Rossweisse-san với
                            bộ quần áo xộc xệch đột nhiên lại gần tôi! Chiếc áo sơ mi không cài khuy của cô ấy để lộ bộ ngực lớn của cô ấy khi chúng
                            đung đưa trước mắt tôi! Trong khi tôi thường nuốt nước bọt và trở nên phấn khích, thì ngược lại, Rossweisse-san lại…
                        </p>
                        <ul className="footer_list">
                            <li className="footer_list-item">
                                <a href="#" className="footer_list-link">
                                    <RiFacebookCircleLine />
                                </a>
                            </li>
                            <li className="footer_list-item">
                                <a href="#" className="footer_list-link">
                                    <RiInstagramLine />
                                </a>
                            </li>
                            <li className="footer_list-item">
                                <a href="#" className="footer_list-link">
                                    <RiTwitterLine />
                                </a>
                            </li>
                        </ul>
                        <span className="copyright">@2021 Company name . All right reserved</span>
                    </div>
                    <div>
                        <h6 className="footer_title">Microsoft Store</h6>
                        <ul className="footer_list">
                            <li className="footer_list-item">
                                <a href="#" className="footer_list-link">About</a>
                            </li>
                            <li className="footer_list-item">
                                <a href="#" className="footer_list-link">Careers</a>
                            </li>
                            <li className="footer_list-item">
                                <a href="#" className="footer_list-link">Affiliatos</a>
                            </li>
                            <li className="footer_list-item">
                                <a href="#" className="footer_list-link">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="footer_title">Education</h6>
                        <ul className="footer_list">
                            <li className="footer_list-item">
                                <a href="#" className="footer_list-link">About</a>
                            </li>
                            <li className="footer_list-item">
                                <a href="#" className="footer_list-link">Careers</a>
                            </li>
                            <li className="footer_list-item">
                                <a href="#" className="footer_list-link">Affiliatos</a>
                            </li>
                            <li className="footer_list-item">
                                <a href="#" className="footer_list-link">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="footer_title">Business</h6>
                        <ul className="footer_list">
                            <li className="footer_list-item">
                                <a href="#" className="footer_list-link">About</a>
                            </li>
                            <li className="footer_list-item">
                                <a href="#" className="footer_list-link">Careers</a>
                            </li>
                            <li className="footer_list-item">
                                <a href="#" className="footer_list-link">Affiliatos</a>
                            </li>
                            <li className="footer_list-item">
                                <a href="#" className="footer_list-link">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;