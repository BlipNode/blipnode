import React from "react";

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-slate-950 text-slate-100">
            {/* Background Grid */}
            <div className="absolute inset-0 grid-pattern opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
                {/* Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gradient">
                        MindFlip - Privacy Policy
                    </h1>
                    <h3 className="text-slate-400 mt-4 text-lg">
                        Last updated September 16, 2025
                    </h3>
                </div>

                {/* WHAT INFORMATION DO WE COLLECT? */}
                <section className="mb-16">
                    <h2
                        id="what-information-do-we-collect"
                        className="text-2xl md:text-3xl font-bold text-gradient mb-6"
                    >
                        1. WHAT INFORMATION DO WE COLLECT?
                    </h2>

                    <div className="space-y-6 text-slate-300 leading-relaxed">
                        <p className="text-lg font-semibold text-white">
                            Personal information you disclose to us
                        </p>

                        <p className="italic">
                            <strong>In Short:</strong> We collect personal information that you
                            provide to us.
                        </p>

                        <p>
                            We collect personal information that you voluntarily provide to us when
                            you register on the Services, express an interest in obtaining
                            information about us or our products and Services, when you participate
                            in activities on the Services, or otherwise when you contact us.
                        </p>

                        <p>
                            <strong>Personal Information Provided by You.</strong> The personal
                            information that we collect depends on the context of your interactions
                            with us and the Services, the choices you make, and the products and
                            features you use. The personal information we collect may include the
                            following:
                        </p>

                        <ul className="list-disc list-inside ml-6 space-y-2">
                            <li>Names</li>
                            <li>Email addresses</li>
                            <li>Passwords</li>
                        </ul>

                        <p>
                            <strong>Sensitive Information.</strong> We do not process sensitive
                            information.
                        </p>

                        <p>
                            All personal information that you provide to us must be true, complete,
                            and accurate, and you must notify us of any changes to such personal
                            information.
                        </p>

                        <p className="text-lg font-semibold text-white">
                            Information automatically collected
                        </p>

                        <p className="italic">
                            <strong>In Short:</strong> Some information — such as your Internet
                            Protocol (IP) address and/or browser and device characteristics — is
                            collected automatically when you visit our Services.
                        </p>

                        <p>
                            We automatically collect certain information when you visit, use, or
                            navigate the Services. This information does not reveal your specific
                            identity (like your name or contact information) but may include device
                            and usage information, such as your IP address, browser and device
                            characteristics, operating system, language preferences, referring URLs,
                            device name, country, location, information about how and when you use
                            our Services, and other technical information. This information is
                            primarily needed to maintain the security and operation of our Services,
                            and for our internal analytics and reporting purposes.
                        </p>

                        <p>
                            Like many businesses, we also collect information through cookies and
                            similar technologies. You can find out more about this in our Cookie
                            Notice:{" "}
                            <a href="#" className="text-cyan-400 hover:underline">
                                add_here.com
                            </a>
                            .
                        </p>

                        <p>The information we collect includes:</p>

                        <ul className="list-disc list-inside ml-6 space-y-2">
                            <li>
                                <i>Internet Protocol (IP) address.</i> We do not actively collect or
                                store derivative data from our users. The application may temporarily
                                process technical information, such as IP addresses, solely for the
                                purpose of ensuring fair use of the service (e.g., applying request
                                limits). This data is not retained, stored, or linked to individual
                                users.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* HOW DO WE PROCESS YOUR INFORMATION? */}
                <section className="mb-16">
                    <h2
                        id="how-do-we-process-your-information"
                        className="text-2xl md:text-3xl font-bold text-gradient mb-6"
                    >
                        2. HOW DO WE PROCESS YOUR INFORMATION?
                    </h2>

                    <div className="space-y-6 text-slate-300 leading-relaxed">
                        <p className="italic">
                            <strong>In Short:</strong> We process your information to provide,
                            improve, and administer our Services, communicate with you, for security
                            and fraud prevention, and to comply with law. We process the personal
                            information for the following purposes listed below. We may also process
                            your information for other purposes only with your prior explicit
                            consent.
                        </p>

                        <p>
                            <strong>
                                We process your personal information for a variety of reasons,
                                depending on how you interact with our Services, including:
                            </strong>
                        </p>

                        <ul className="list-disc list-inside ml-6 space-y-4">
                            <li>
                                <strong>
                                    To facilitate account creation and authentication and otherwise
                                    manage user accounts.
                                </strong>{" "}
                                We may process your information so you can create and log in to your
                                account, as well as keep your account in working order.
                            </li>

                            <li>
                                <strong>
                                    To deliver and facilitate delivery of services to the user.
                                </strong>{" "}
                                We may process your information to provide you with the requested
                                service.
                            </li>

                            <li>
                                <strong>
                                    To respond to user inquiries/offer support to users.
                                </strong>{" "}
                                We may process your information to respond to your inquiries and
                                solve any potential issues you might have with the requested
                                service.
                            </li>

                            <li>
                                <strong>To send administrative information to you.</strong> We may
                                process your information to send you details about our products and
                                services, changes to our terms and policies, and other similar
                                information.
                            </li>

                            <li>
                                <strong>To protect our Services.</strong> We may process your
                                information as part of our efforts to keep our Services safe and
                                secure, including fraud monitoring and prevention.
                            </li>

                            <li>
                                <strong>To identify usage trends.</strong> We may process
                                information about how you use our Services to better understand how
                                they are being used so we can improve them.
                            </li>

                            <li>
                                <strong>
                                    To save or protect an individual's vital interest.
                                </strong>{" "}
                                We may process your information when necessary to save or protect an
                                individual's vital interest, such as to prevent harm.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION? */}
                <section>
                    <h2
                        id="what-legal-bases-do-we-rely-on"
                        className="text-2xl md:text-3xl font-bold text-gradient mb-6"
                    >
                        3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
                    </h2>

                    <div className="space-y-6 text-slate-300 leading-relaxed">
                        <p className="italic">
                            <strong>In Short:</strong> We only process your personal information
                            when we believe it is necessary and we have a valid legal reason (i.e.,
                            legal basis) to do so under applicable law, like with your consent, to
                            comply with laws, to provide you with services to enter into or fulfill
                            our contractual obligations, to protect your rights, or to fulfill our
                            legitimate business interests.
                        </p>

                        <p className="text-white font-semibold">
                            If you are located in the EU or UK, this section applies to you.
                        </p>

                        <p>
                            The General Data Protection Regulation (GDPR) and UK GDPR require us to
                            explain the valid legal bases we rely on in order to process your
                            personal information. As such, we may rely on the following legal bases
                            to process your personal information:
                        </p>

                        <ul className="list-disc list-inside ml-6 space-y-3">
                            <li>
                                <strong>Consent.</strong> We may process your information if you
                                have given us permission (i.e., consent) to use your personal
                                information for a specific purpose. You can withdraw your consent at
                                any time. Learn more about{" "}
                                <a href="#" className="text-cyan-400 hover:underline">
                                    withdrawing your consent
                                </a>
                                .
                            </li>

                            <li>
                                <strong>Performance of a Contract.</strong> We may process your
                                personal information when we believe it is necessary to fulfill our
                                contractual obligations to you, including providing our Services or
                                at your request prior to entering into a contract with you.
                            </li>

                            <li>
                                <strong>Legitimate Interests.</strong> We may process your
                                information when we believe it is reasonably necessary to achieve
                                our legitimate business interests and those interests do not
                                outweigh your interests and fundamental rights and freedoms. For
                                example:
                                <ul className="list-disc ml-8 mt-2 space-y-1">
                                    <li>
                                        Analyze how our Services are used so we can improve them to
                                        engage and retain users
                                    </li>
                                    <li>
                                        Diagnose problems and/or prevent fraudulent activities
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <strong>Legal Obligations.</strong> We may process your information
                                where we believe it is necessary for compliance with our legal
                                obligations, such as to cooperate with a law enforcement body or
                                regulatory agency, exercise or defend our legal rights, or disclose
                                your information as evidence in litigation in which we are involved.
                            </li>

                            <li>
                                <strong>Vital Interests.</strong> We may process your information
                                where we believe it is necessary to protect your vital interests or
                                the vital interests of a third party, such as situations involving
                                potential threats to the safety of any person.
                            </li>
                        </ul>

                        <p className="text-white font-semibold">
                            If you are located in Canada, this section applies to you.
                        </p>

                        <p>
                            We may process your information if you have given us specific permission
                            (i.e., express consent) to use your personal information for a specific
                            purpose, or in situations where your permission can be inferred (i.e.,
                            implied consent). You can{" "}
                            <a
                                href="#what-are-your-privacy-rights"
                                className="text-cyan-400 hover:underline"
                            >
                                withdraw your consent
                            </a>{" "}
                            at any time.
                        </p>

                        <p>
                            In some exceptional cases, we may be legally permitted under applicable
                            law to process your information without your consent, including, for
                            example:
                        </p>

                        <ul className="list-disc list-inside ml-6 space-y-2">
                            <li>
                                If collection is clearly in the interests of an individual and
                                consent cannot be obtained in a timely way
                            </li>
                            <li>For investigations and fraud detection and prevention</li>
                            <li>
                                For business transactions provided certain conditions are met
                            </li>
                            <li>
                                If it is contained in a witness statement and the collection is
                                necessary to assess, process, or settle an insurance claim
                            </li>
                            <li>
                                For identifying injured, ill, or deceased persons and communicating
                                with next of kin
                            </li>
                            <li>
                                If we have reasonable grounds to believe an individual has been, is,
                                or may be victim of financial abuse
                            </li>
                            <li>
                                If it is reasonable to expect collection and use with consent would
                                compromise the availability or the accuracy of the information and
                                the collection is reasonable for purposes related to investigating a
                                breach of an agreement or a contravention of the laws of Canada or a
                                province
                            </li>
                            <li>
                                If disclosure is required to comply with a subpoena, warrant, court
                                order, or rules of the court relating to the production of records
                            </li>
                            <li>
                                If it was produced by an individual in the course of their
                                employment, business, or profession and the collection is consistent
                                with the purposes for which the information was produced
                            </li>
                            <li>
                                If the collection is solely for journalistic, artistic, or literary
                                purposes
                            </li>
                            <li>
                                If the information is publicly available and is specified by the
                                regulations
                            </li>
                            <li>
                                We may disclose de-identified information for approved research or
                                statistics projects, subject to ethics oversight and confidentiality
                                commitments
                            </li>
                        </ul>
                    </div>
                </section>

                {/* 4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION? */}
                <section className="mb-12 space-y-6">
                    <h2
                        id="when-and-with-whom-do-we-share"
                        className="text-2xl md:text-3xl font-bold text-gradient mb-6"
                    >
                        4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                    </h2>

                    <p className="italic text-slate-300">
                        <strong>In Short:</strong> We may share information in specific situations
                        described in this section and/or with the following third parties.
                    </p>

                    <p className="text-slate-300">
                        We may need to share your personal information in the following situations:
                    </p>

                    <ul className="list-disc ml-6 space-y-2 text-slate-300">
                        <li>
                            <strong className="text-white">Business Transfers.</strong> We may share
                            or transfer your information in connection with, or during negotiations
                            of, any merger, sale of company assets, financing, or acquisition of all
                            or a portion of our business to another company.
                        </li>
                    </ul>
                </section>

                {/* 5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES? */}
                <section className="mb-12 space-y-6">
                    <h2
                        id="what-is-our-stance-on-third-party"
                        className="text-2xl md:text-3xl font-bold text-gradient"
                    >
                        5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
                    </h2>

                    <p className="italic text-slate-300">
                        <strong>In Short:</strong> We are not responsible for the safety of any
                        information that you share with third parties that we may link to or who
                        advertise on our Services, but are not affiliated with our Services.
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        The Services may link to third-party websites, online services, or mobile
                        applications and/or contain advertisements from third parties that are not
                        affiliated with us and which may link to other websites, services, or
                        applications. Accordingly, we do not make any guarantee regarding any such
                        third parties, and we will not be liable for any loss or damage caused by
                        the use of such third-party websites, services, or applications. The
                        inclusion of a link towards a third-party website, service, or application
                        does not imply an endorsement by us. We cannot guarantee the safety and
                        privacy of data you provide to any third-party websites. Any data collected
                        by third parties is not covered by this Privacy Notice. We are not
                        responsible for the content or privacy and security practices and policies
                        of any third parties, including other websites, services, or applications
                        that may be linked to or from the Services. You should review the policies
                        of such third parties and contact them directly to respond to your
                        questions.
                    </p>
                </section>

                {/* 6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES? */}
                <section className="mb-12 space-y-6">
                    <h2
                        id="do-we-use-cookies"
                        className="text-2xl md:text-3xl font-bold text-gradient"
                    >
                        6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                    </h2>

                    <p className="italic text-slate-300">
                        <strong>In Short:</strong> We may use cookies and other tracking
                        technologies to collect and store your information.
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        We may use cookies and similar tracking technologies (like web beacons and
                        pixels) to gather information when you interact with our Services. Some
                        online tracking technologies help us maintain the security of our Services
                        and your account, prevent crashes, fix bugs, save your preferences, and
                        assist with basic site functions.
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        We also permit third parties and service providers to use online tracking
                        technologies on our Services for analytics and advertising, including to
                        help manage and display advertisements, to tailor advertisements to your
                        interests, or to send abandoned shopping cart reminders (depending on your
                        communication preferences). The third parties and service providers use
                        their technology to provide advertising about products and services
                        tailored to your interests which may appear either on our Services or on
                        other websites.
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        To the extent these online tracking technologies are deemed to be a
                        "sale"/"sharing" (which includes targeted advertising, as defined under the
                        applicable laws) under applicable US state laws, you can opt out of these
                        online tracking technologies by submitting a request as described below
                        under section{" "}
                        <a
                            href="#do-united-states-residents"
                            className="text-cyan-400 hover:underline"
                        >
                            DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                        </a>
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        Specific information about how we use such technologies and how you can
                        refuse certain cookies is set out in our Cookie Notice:{" "}
                        <a href="#" className="text-cyan-400 hover:underline">
                            add_here.com
                        </a>
                        .
                    </p>
                </section>

                {/* 7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY? */}
                <section className="mb-12 space-y-6">
                    <h2
                        id="is-your-information-transferred"
                        className="text-2xl md:text-3xl font-bold text-gradient"
                    >
                        7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
                    </h2>

                    <p className="italic text-slate-300">
                        <strong>In Short:</strong> We may transfer, store, and process your
                        information in countries other than your own.
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        Our servers are located in the United States. Regardless of your location,
                        please be aware that your information may be transferred to, stored by, and
                        processed by us in our facilities and in the facilities of the third
                        parties with whom we may share your personal information (see{" "}
                        <a
                            href="#when-and-with-whom-do-we-share"
                            className="text-cyan-400 hover:underline"
                        >
                            WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                        </a>{" "}
                        above), including facilities in the United States, and other countries.
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        If you are a resident in the European Economic Area (EEA), United Kingdom
                        (UK), or Switzerland, then these countries may not necessarily have data
                        protection laws or other similar laws as comprehensive as those in your
                        country. However, we will take all necessary measures to protect your
                        personal information in accordance with this Privacy Notice and applicable
                        law.
                    </p>

                    <p className="text-slate-300 font-semibold">
                        European Commission's Standard Contractual Clauses:
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        We have implemented measures to protect your personal information,
                        including by using the European Commission's Standard Contractual Clauses
                        for transfers of personal information between our group companies and
                        between us and our third-party providers. These clauses require all
                        recipients to protect all personal information that they process
                        originating from the EEA or UK in accordance with European data protection
                        laws and regulations. Our Standard Contractual Clauses can be provided upon
                        request. We have implemented similar appropriate safeguards with our
                        third-party service providers and partners and further details can be
                        provided upon request.
                    </p>
                </section>

                {/* 8. HOW LONG DO WE KEEP YOUR INFORMATION? */}
                <section className="mb-12 space-y-6">
                    <h2
                        id="how-long-do-we-keep"
                        className="text-2xl md:text-3xl font-bold text-gradient"
                    >
                        8. HOW LONG DO WE KEEP YOUR INFORMATION?
                    </h2>

                    <p className="italic text-slate-300">
                        <strong>In Short:</strong> We keep your information for as long as
                        necessary to fulfill the purposes outlined in this Privacy Notice unless
                        otherwise required by law.
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        We will only keep your personal information for as long as it is necessary
                        for the purposes set out in this Privacy Notice, unless a longer retention
                        period is required or permitted by law (such as tax, accounting, or other
                        legal requirements). No purpose in this notice will require us keeping your
                        personal information for longer than the period of time in which users have
                        an account with us.
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        When we have no ongoing legitimate business need to process your personal
                        information, we will either delete or anonymize such information, or, if
                        this is not possible (for example, because your personal information has
                        been stored in backup archives), then we will securely store your personal
                        information and isolate it from any further processing until deletion is
                        possible.
                    </p>
                </section>

                {/* 9. HOW DO WE KEEP YOUR INFORMATION SAFE? */}
                <section className="mb-12 space-y-6">
                    <h2
                        id="how-do-we-keep-your-information-safe"
                        className="text-2xl md:text-3xl font-bold text-gradient"
                    >
                        9. HOW DO WE KEEP YOUR INFORMATION SAFE?
                    </h2>

                    <p className="italic text-slate-300">
                        <strong>In Short:</strong> We aim to protect your personal information
                        through a system of organizational and technical security measures.
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        We have implemented appropriate and reasonable technical and organizational
                        security measures designed to protect the security of any personal
                        information we process. However, despite our safeguards and efforts to
                        secure your information, no electronic transmission over the Internet or
                        information storage technology can be guaranteed to be 100% secure, so we
                        cannot promise or guarantee that hackers, cybercriminals, or other
                        unauthorized third parties will not be able to defeat our security and
                        improperly collect, access, steal, or modify your information. Although we
                        will do our best to protect your personal information, transmission of
                        personal information to and from our Services is at your own risk. You
                        should only access the Services within a secure environment.
                    </p>
                </section>

                {/* 10. DO WE COLLECT INFORMATION FROM MINORS? */}
                <section className="mb-12 space-y-6">
                    <h2 id="do-we-collect-information-from-minors" className="text-2xl md:text-3xl font-bold text-gradient">
                        10. DO WE COLLECT INFORMATION FROM MINORS?
                    </h2>

                    <p className="italic text-slate-300">
                        <strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years
                        of age or the equivalent age as specified by law in your jurisdiction.
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        We do not knowingly collect, solicit data from, or market to children under 18 years of age or the
                        equivalent age as specified by law in your jurisdiction, nor do we knowingly sell such personal
                        information. By using the Services, you represent that you are at least 18 or the equivalent age as
                        specified by law in your jurisdiction or that you are the parent or guardian of such a minor and consent
                        to such minor dependent&apos;s use of the Services. If we learn that personal information from users less
                        than 18 years of age or the equivalent age as specified by law in your jurisdiction has been collected,
                        we will deactivate the account and take reasonable measures to promptly delete such data from our
                        records. If you become aware of any data we may have collected from children under age 18 or the
                        equivalent age as specified by law in your jurisdiction, please contact us at{" "}
                        <a href="mailto:blipnode.dev@gmail.com" className="text-blue-600 hover:underline">
                            blipnode.dev@gmail.com
                        </a>.
                    </p>
                </section>


                {/* 11. WHAT ARE YOUR PRIVACY RIGHTS? */}
                <section className="mb-12 space-y-6">
                    <h2 id="what-are-your-privacy-rights" className="text-2xl md:text-3xl font-bold text-gradient">
                        11. WHAT ARE YOUR PRIVACY RIGHTS?
                    </h2>

                    <p className="italic text-slate-300">
                        <strong>In Short:</strong> Depending on your state of residence in the US or in some regions, such as
                        the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that
                        allow you greater access to and control over your personal information. You may review, change, or
                        terminate your account at any time, depending on your country, province, or state of residence.
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable
                        data protection laws. These may include the right (i) to request access and obtain a copy of your
                        personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your
                        personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated
                        decision-making. If a decision that produces legal or similarly significant effects is made solely by
                        automated means, we will inform you, explain the main factors, and offer a simple way to request human
                        review. In certain circumstances, you may also have the right to object to the processing of your
                        personal information. You can make such a request by contacting us by using the contact details provided
                        in the section{" "}
                        <a href="#how-can-you-contact-us" className="text-blue-600 hover:underline">
                            HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                        </a>{" "}
                        below.
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        We will consider and act upon any request in accordance with applicable data protection laws.
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        If you are located in the EEA or UK and you believe we are unlawfully processing your personal
                        information, you also have the right to complain to your{" "}
                        <a
                            href="https://ec.europa.eu/newsroom/article29/items/612080"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Member State data protection authority
                        </a>{" "}
                        or{" "}
                        <a
                            href="https://ico.org.uk/make-a-complaint/data-protection-complaints/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            UK data protection authority.
                        </a>
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        If you are located in Switzerland, you may contact the{" "}
                        <a
                            href="https://www.edoeb.admin.ch/en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Federal Data Protection and Information Commissioner.
                        </a>
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        <strong className="underline">Withdrawing your consent:</strong> If we are relying on your consent to process your personal information,
                        which may be express and/or implied consent depending on the applicable law, you have the right to
                        withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using
                        the contact details provided in the section{" "}
                        <a href="#how-can-you-contact-us" className="text-blue-600 hover:underline">
                            HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                        </a>{" "}
                        below.
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        However, please note that this will not affect the lawfulness of the processing before its withdrawal
                        nor, when applicable law allows, will it affect the processing of your personal information conducted in
                        reliance on lawful processing grounds other than consent.
                    </p>
                </section>

                {/* 12. CONTROLS FOR DO-NOT-TRACK FEATURES */}
                <section className="mb-12 space-y-6">
                    <h2 id="controls-for-do-not-track-features" className="text-2xl md:text-3xl font-bold text-gradient">
                        12. CONTROLS FOR DO-NOT-TRACK FEATURES
                    </h2>

                    <p className="text-slate-300 leading-relaxed">
                        Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track
                        (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to have data about
                        your online browsing activities monitored and collected. At this stage, no uniform technology standard
                        for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to
                        DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked
                        online. If a standard for online tracking is adopted that we must follow in the future, we will inform
                        you about that practice in a revised version of this Privacy Notice.
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        California law requires us to let you know how we respond to web browser DNT signals. Because there
                        currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not
                        respond to them at this time.
                    </p>
                </section>

                {/* 13. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS? */}
                <section className="mb-12 space-y-6">
                    <h2 id="do-united-states-residents" className="text-2xl md:text-3xl font-bold text-gradient">
                        13. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                    </h2>

                    <p className="text-slate-300 leading-relaxed italic">
                        <strong>In Short:</strong> If you are a resident of California, Colorado, Connecticut, Delaware,
                        Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey,
                        Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access
                        to and receive details about the personal information we maintain about you and how we have
                        processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also
                        have the right to withdraw your consent to our processing of your personal information. These rights
                        may be limited in some circumstances by applicable law. More information is provided below.
                    </p>

                    <p className="text-lg font-semibold mt-4">Categories of Personal Information We Collect</p>

                    <p className="text-slate-300 leading-relaxed">
                        The table below shows the categories of personal information we have collected in the past twelve (12)
                        months. The table includes illustrative examples of each category and does not reflect the personal
                        information we collect from you. For a comprehensive inventory of all personal information we process,
                        please refer to the section{" "}
                        <a href="#what-information-do-we-collect" className="text-blue-600 hover:underline">
                            WHAT INFORMATION DO WE COLLECT?
                        </a>.
                    </p>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 border-collapse">
                            <thead>
                                <tr>
                                    <th className="border p-2 text-left font-semibold">Category</th>
                                    <th className="border p-2 text-left font-semibold">Examples</th>
                                    <th className="border p-2 text-left font-semibold">Collected</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="border p-2">A. Identifiers</td>
                                    <td className="border p-2">
                                        Contact details, such as real name, alias, postal address, telephone or mobile contact
                                        number, unique personal identifier, online identifier, Internet Protocol address, email
                                        address, and account name
                                    </td>
                                    <td className="border p-2">YES</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">
                                        B. Personal information as defined in the California Customer Records statute
                                    </td>
                                    <td className="border p-2">
                                        Name, contact information, education, employment, employment history, and financial
                                        information
                                    </td>
                                    <td className="border p-2">YES</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">C. Protected classification characteristics under state or federal law</td>
                                    <td className="border p-2">
                                        Gender, age, date of birth, race and ethnicity, national origin, marital status, and other
                                        demographic data
                                    </td>
                                    <td className="border p-2">NO</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">D. Commercial information</td>
                                    <td className="border p-2">
                                        Transaction information, purchase history, financial details, and payment information
                                    </td>
                                    <td className="border p-2">NO</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">E. Biometric Information</td>
                                    <td className="border p-2">Fingerprints and voiceprints</td>
                                    <td className="border p-2">NO</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">F. Internet or other similar network activity</td>
                                    <td className="border p-2">
                                        Browsing history, search history, online behavior, interest data, and interactions with our
                                        and other websites, applications, systems, and advertisements
                                    </td>
                                    <td className="border p-2">NO</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">G. Geolocation data</td>
                                    <td className="border p-2">Device location</td>
                                    <td className="border p-2">NO</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">H. Audio, electronic, sensory, or similar information</td>
                                    <td className="border p-2">
                                        Images and audio, video or call recordings created in connection with our business
                                        activities
                                    </td>
                                    <td className="border p-2">NO</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">I. Professional or employment-related information</td>
                                    <td className="border p-2">
                                        Business contact details in order to provide you our Services at a business level or job
                                        title, work history, and professional qualifications if you apply for a job with us
                                    </td>
                                    <td className="border p-2">NO</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">J. Education Information</td>
                                    <td className="border p-2">Student records and directory information</td>
                                    <td className="border p-2">NO</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">K. Inferences drawn from collected personal information</td>
                                    <td className="border p-2">
                                        Inferences drawn from any of the collected personal information listed above to create a
                                        profile or summary about, for example, an individual's preferences and characteristics
                                    </td>
                                    <td className="border p-2">NO</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">L. Sensitive personal Information</td>
                                    <td className="border p-2"></td>
                                    <td className="border p-2">NO</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-slate-300 leading-relaxed">
                        We may also collect other personal information outside of these categories through instances where you
                        interact with us in person, online, or by phone or mail in the context of:
                    </p>

                    <ul className="list-disc list-inside pl-4 space-y-1">
                        <li>Receiving help through our customer support channels;</li>
                        <li>Participation in customer surveys or contests; and</li>
                        <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
                    </ul>

                    <p className="text-slate-300 leading-relaxed">
                        We will use and retain the collected personal information as needed to provide the Services or for:
                    </p>

                    <ul className="list-disc list-inside pl-4 space-y-1">
                        <li>
                            We retain personal information (such as users&apos; names and email addresses) for as long as a user
                            maintains an active account. When an account is deleted, we use a soft-delete mechanism: the account
                            is marked as deleted in our database, making the data inaccessible for regular use, but it may remain
                            internally for security, audit, or compliance purposes. This ensures data integrity while protecting
                            user privacy. We do not collect sensitive personal information such as social security numbers,
                            financial information, health data, or government-issued identification numbers.
                        </li>
                    </ul>

                    <p className="text-lg font-semibold mt-4">Sources of Personal Information</p>
                    <p className="text-slate-300 leading-relaxed">
                        Learn more about the sources of personal information we collect in{" "}
                        <a href="#what-information-do-we-collect" className="text-blue-600 hover:underline">
                            WHAT INFORMATION DO WE COLLECT?
                        </a>.
                    </p>

                    <p className="text-lg font-semibold mt-4">How We Use and Share Personal Information</p>
                    <p className="text-slate-300 leading-relaxed">
                        Learn more about how we use your personal information in the section{" "}
                        <a href="#what-information-do-we-collect" className="text-blue-600 hover:underline">
                            HOW DO WE PROCESS YOUR INFORMATION?
                        </a>.
                    </p>

                    <p className="text-slate-300 leading-relaxed font-semibold">
                        Will your information be shared with anyone else?
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        We may disclose your personal information with our service providers pursuant to a written contract
                        between us and each service provider. Learn more about how we disclose personal information in the
                        section{" "}
                        <a href="#when-and-with-whom-do-we-share" className="text-blue-600 hover:underline">
                            WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                        </a>.
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        We may use your personal information for our own business purposes, such as for undertaking internal
                        research for technological development and demonstration. This is not considered to be &quot;selling&quot; of your
                        personal information.
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        We have not disclosed, sold, or shared any personal information to third parties for a business or
                        commercial purpose in the preceding twelve (12) months. We will not sell or share personal information
                        in the future belonging to website visitors, users, and other consumers.
                    </p>

                    <p className="text-lg font-semibold mt-4">Your Rights</p>
                    <p className="text-slate-300 leading-relaxed">
                        You have rights under certain US state data protection laws. However, these rights are not absolute, and
                        in certain cases, we may decline your request as permitted by law. These rights include:
                    </p>

                    <ul className="list-disc list-inside pl-4 space-y-1">
                        <li><strong>Right to know</strong> whether or not we are processing your personal data</li>
                        <li><strong>Right to access</strong> your personal data</li>
                        <li><strong>Right to correct</strong> inaccuracies in your personal data</li>
                        <li><strong>Right to request</strong> the deletion of your personal data</li>
                        <li><strong>Right to obtain a copy</strong> of the personal data you previously shared with us</li>
                        <li><strong>Right to non-discrimination</strong> for exercising your rights</li>
                        <li>
                            <strong>Right to opt out</strong> of the processing of your personal data if it is used for targeted
                            advertising (or sharing as defined under California&apos;s privacy law), the sale of personal data, or
                            profiling in furtherance of decisions that produce legal or similarly significant effects
                            (&quot;profiling&quot;)
                        </li>
                    </ul>

                    <p className="text-slate-300 leading-relaxed">Depending upon the state where you live, you may also have the following rights:</p>

                    <ul className="list-disc list-inside pl-4 space-y-1">
                        <li>Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)</li>
                        <li>Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland)</li>
                        <li>Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in Minnesota and Oregon)</li>
                        <li>Right to review, understand, question, and correct how personal data has been profiled (as permitted by applicable law, including the privacy law in Minnesota)</li>
                        <li>Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)</li>
                        <li>Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida)</li>
                    </ul>

                    <p className="text-lg font-semibold mt-4">How to Exercise Your Rights</p>
                    <p className="text-slate-300 leading-relaxed">
                        To exercise these rights, you can contact us by visiting{" "}
                        <a href="http://www.blipnode.com/data-request" className="text-blue-600 hover:underline">
                            http://www.blipnode.com/data-request
                        </a>, or by emailing us at{" "}
                        <a href="mailto:blipnode.dev@gmail.com" className="text-blue-600 hover:underline">
                            blipnode.dev@gmail.com
                        </a>.
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        Under certain US state data protection laws, you can designate an authorized agent to make a request on
                        your behalf. We may deny a request from an authorized agent that does not submit proof that they have
                        been validly authorized to act on your behalf in accordance with applicable laws.
                    </p>

                    <p className="text-lg font-semibold mt-4">Request Verification</p>
                    <p className="text-slate-300 leading-relaxed">
                        Upon receiving your request, we will need to verify your identity to determine you are the same person
                        about whom we have the information in our system. We will only use personal information provided in your
                        request to verify your identity or authority to make the request. However, if we cannot verify your
                        identity from the information already maintained by us, we may request that you provide additional
                        information for the purposes of verifying your identity and for security or fraud-prevention purposes.
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                        If you submit the request through an authorized agent, we may need to collect additional information to
                        verify your identity before processing your request and the agent will need to provide a written and
                        signed permission from you to submit such request on your behalf.
                    </p>

                    <p className="text-lg font-semibold mt-4">Appeals</p>
                    <p className="text-slate-300 leading-relaxed">
                        Under certain US state data protection laws, if we decline to take action regarding your request, you may
                        appeal our decision by emailing us at{" "}
                        <a href="mailto:blipnode.dev@gmail.com" className="text-blue-600 hover:underline">
                            blipnode.dev@gmail.com
                        </a>. We will inform you in writing of any action taken or not taken in response to the appeal, including
                        a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint
                        to your state attorney general.
                    </p>

                    <p className="text-lg font-semibold mt-4">California "Shine the Light" Law</p>
                    <p className="text-slate-300 leading-relaxed">
                        California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are
                        California residents to request and obtain from us, once a year and free of charge, information about
                        categories of personal information (if any) we disclosed to third parties for direct marketing purposes
                        and the names and addresses of all third parties with which we shared personal information in the
                        immediately preceding calendar year. If you are a California resident and would like to make such a
                        request, please submit your request in writing to us by using the contact details provided in the
                        section{" "}
                        <a href="#how-can-you-contact-us" className="text-blue-600 hover:underline">
                            HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                        </a>.
                    </p>
                </section>

                {/* 14. SOFT-DELETE MECHANISM */}
                <section className="mb-12 space-y-6">
                    <h2 id="soft-delete-mechanism" className="text-2xl md:text-3xl font-bold text-gradient">
                        14. SOFT-DELETE MECHANISM
                    </h2>

                    <p className="text-slate-300 leading-relaxed">
                        When a user deletes their account, the data is logically deleted in our database using a deletion flag.
                        While the information remains in the database for internal auditing, security, and compliance purposes,
                        it is excluded from all active queries and inaccessible through the app. This approach ensures data
                        integrity, allows potential recovery, and protects user privacy.
                    </p>
                </section>

                {/* 15. RATE-LIMITING AND TEMPORARY IP PROCESSING */}
                <section className="mb-12 space-y-6">
                    <h2 id="rate-limiting-and-ip-processing" className="text-2xl md:text-3xl font-bold text-gradient">
                        15. RATE-LIMITING AND TEMPORARY IP PROCESSING
                    </h2>

                    <p className="text-slate-300 leading-relaxed">
                        To ensure the stability and security of our services, we implement rate-limiting based on users' IP
                        addresses. Each IP address is temporarily tracked to enforce limits on the number of requests per time
                        interval. Once the limit is reached, further requests are delayed until the period resets. IP addresses
                        are not stored permanently and are only used for this traffic management purpose, ensuring fair access
                        for all users and protecting the service against automated abuse.
                    </p>
                </section>

                {/* 16. DO WE MAKE UPDATES TO THIS NOTICE? */}
                <section className="mb-12 space-y-6">
                    <h2 id="do-we-make-updates-to-this-notice" className="text-2xl md:text-3xl font-bold text-gradient">
                        16. DO WE MAKE UPDATES TO THIS NOTICE?
                    </h2>

                    <p className="text-slate-300 leading-relaxed italic">
                        <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        We may update this Privacy Notice from time to time. The updated version will be indicated by an updated
                        "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we
                        may notify you either by prominently posting a notice of such changes or by directly sending you a
                        notification. We encourage you to review this Privacy Notice frequently to be informed of how we are
                        protecting your information.
                    </p>
                </section>

                {/* 17. HOW CAN YOU CONTACT US ABOUT THIS NOTICE? */}
                <section className="mb-12 space-y-6">
                    <h2 id="how-can-you-contact-us" className="text-2xl md:text-3xl font-bold text-gradient">
                        17. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                    </h2>

                    <p className="text-slate-300 leading-relaxed">
                        If you have questions or comments about this notice, you may email us at{" "}
                        <a href="mailto:blipnode.dev@gmail.com" className="text-blue-600 hover:underline">
                            blipnode.dev@gmail.com
                        </a>.
                    </p>
                </section>

                {/* 18. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU? */}
                <section className="mb-12 space-y-6">
                    <h2 id="how-can-you-delete" className="text-2xl md:text-3xl font-bold text-gradient">
                        18. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                    </h2>

                    <p className="text-slate-300 leading-relaxed">
                        Based on the applicable laws of your country or state of residence in the US, you may have the right to
                        request access to the personal information we collect from you, details about how we have processed it,
                        correct inaccuracies, or delete your personal information. You may also have the right to withdraw your
                        consent to our processing of your personal information. These rights may be limited in some
                        circumstances by applicable law. To request to review, update, or delete your personal information,
                        please visit:{" "}
                        <a
                            href="http://www.blipnode.com/mindflip/data-request"
                            className="text-blue-600 hover:underline"
                        >
                            http://www.blipnode.com/mindflip/data-request
                        </a>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
