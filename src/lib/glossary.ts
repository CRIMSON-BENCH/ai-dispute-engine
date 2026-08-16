export interface GlossaryTerm {
  term: string;
  slug: string;
  shortDef: string;
  longDef: string;
  relatedTerms: string[];
  category: string;
}

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: "Demand Letter",
    slug: "demand-letter",
    shortDef: "A formal written notice sent to another party requesting payment, action, or resolution of a dispute before filing a lawsuit.",
    longDef: `A demand letter is a formal document, typically sent via certified mail, that outlines a legal grievance and requests a specific remedy, usually payment of money owed or correction of a wrong. It serves as both a communication tool and a critical piece of evidence showing you attempted to resolve the dispute before turning to the courts.

Demand letters should include a clear statement of the facts, the legal basis for your claim, the specific amount or action you are requesting, and a reasonable deadline for the recipient to respond. Many courts, particularly small claims courts, look favorably on plaintiffs who can show they made a good-faith effort to resolve the matter before filing suit.

Sending a demand letter is often the most cost-effective first step in any dispute because it frequently leads to settlement without the expense and delay of litigation. Even when it does not result in immediate resolution, it creates a documented record that strengthens your position if you later need to go to court.`,
    relatedTerms: ["certified-mail", "statute-of-limitations", "settlement", "cause-of-action"],
    category: "Legal Process",
  },
  {
    term: "Certified Mail",
    slug: "certified-mail",
    shortDef: "A postal service option that provides the sender with proof that a letter was mailed and delivered or attempted.",
    longDef: `Certified mail is a service offered by the United States Postal Service and similar carriers that provides the sender with a mailing receipt and a record of delivery, including the date and the signature of the person who accepted the item. It is commonly used to send demand letters, legal notices, and other documents where proof of delivery may become important.

When you send a letter via certified mail with return receipt requested, you receive a green card back showing the recipient's signature, or a notation that delivery was attempted. This creates an official record that the recipient was notified, which can be critical if the dispute later goes to court and the other party claims they never received your communication.

Certified mail does not by itself constitute legal service of process in most jurisdictions, but it is widely accepted as adequate notice for demand letters, contract cancellation notices, and many types of statutory notifications required before filing certain claims.`,
    relatedTerms: ["demand-letter", "service-of-process", "proof-of-service", "cease-and-desist"],
    category: "Legal Process",
  },
  {
    term: "Statute of Limitations",
    slug: "statute-of-limitations",
    shortDef: "The legally mandated deadline by which a lawsuit must be filed, after which the claim is generally barred forever.",
    longDef: `A statute of limitations sets the maximum time period after an event during which a lawsuit can be filed. These deadlines vary widely depending on the type of claim, such as contract disputes, personal injury, fraud, or property damage, and the state where the claim arose, ranging anywhere from one year to over ten years.

Once the statute of limitations expires, a defendant can raise it as an absolute defense and the court will dismiss the case regardless of its underlying merits, no matter how clearly the defendant was at fault. The clock generally starts running from the date of the injury or breach, though some claims use a discovery rule that starts the clock when the harm was or should have been discovered.

Because missing this deadline can permanently destroy an otherwise valid claim, it is one of the first things to check when considering a demand letter or lawsuit. Sending a demand letter does not, by itself, pause or extend the statute of limitations in most states, so time-sensitive claims should not wait on a response before also preparing to file if necessary.`,
    relatedTerms: ["cause-of-action", "complaint", "demand-letter", "filing-fee"],
    category: "Legal Process",
  },
  {
    term: "Negligence",
    slug: "negligence",
    shortDef: "The failure to exercise a reasonable standard of care that results in harm or damage to another person or their property.",
    longDef: `Negligence is a legal theory that holds a person or entity liable when they fail to exercise the level of care that a reasonably prudent person would use in similar circumstances, and that failure causes harm to another. To win a negligence claim, a plaintiff must generally prove four elements: the defendant owed them a duty of care, the defendant breached that duty, the breach actually caused the plaintiff's injury, and the plaintiff suffered measurable damages as a result.

Negligence is the foundation of most personal injury claims, including car accidents, slip-and-fall incidents, medical malpractice, and product liability cases. Unlike intentional wrongdoing, negligence does not require proof that the defendant meant to cause harm, only that they failed to act with reasonable care.

In many states, a plaintiff's own negligence can reduce or bar their recovery. Under comparative negligence rules, a plaintiff's damages are reduced by their percentage of fault. Under contributory negligence rules, which a small number of states still follow, any fault on the plaintiff's part can bar recovery entirely.`,
    relatedTerms: ["liability", "damages", "compensatory-damages", "preponderance-of-evidence"],
    category: "Legal Process",
  },
  {
    term: "Liability",
    slug: "liability",
    shortDef: "Legal responsibility for one's actions or omissions, particularly when they cause harm or loss to another party.",
    longDef: `Liability is the state of being legally responsible for something, most commonly for causing harm, damage, or financial loss to another party. When a court finds a person or entity liable, it means they are legally obligated to compensate the injured party, usually through money damages. Liability can arise from negligence, breach of contract, intentional wrongdoing, or strict liability imposed by statute regardless of fault.

There are different forms of liability. Joint and several liability means multiple parties can each be held responsible for the full amount of damages. Vicarious liability holds one party responsible for the actions of another, such as an employer being liable for the acts of its employees performed in the scope of their employment. Strict liability applies in certain situations, such as defective products or abnormally dangerous activities, where fault does not need to be proven.

Understanding who bears liability is central to any demand letter or lawsuit. Your demand should clearly identify why the recipient is legally liable, whether through their own actions, their role as an employer, their contractual obligations, or a statute that imposes responsibility.`,
    relatedTerms: ["negligence", "damages", "indemnification", "cause-of-action"],
    category: "Legal Process",
  },
  {
    term: "Service of Process",
    slug: "service-of-process",
    shortDef: "The formal legal procedure of delivering court documents to a defendant to notify them of a lawsuit.",
    longDef: `Service of process is the constitutionally required step of formally notifying a defendant that a lawsuit has been filed against them. Courts cannot proceed with a case, let alone enter a judgment, unless the defendant has been properly served with the summons and complaint. This requirement exists to protect due process rights so that no one loses a case without knowing about it.

Acceptable methods of service vary by jurisdiction but commonly include personal delivery by a sheriff or process server, certified mail with return receipt, or in some cases publication in a newspaper when a defendant cannot be located. Each state has specific rules about who can serve papers and how proof of service must be documented.

If a case proceeds to court, plaintiffs should keep careful records of how and when the defendant was served, since improper service is one of the most common reasons a judgment gets challenged or thrown out later. Many small claims courts have their own simplified service rules, but they still require that the defendant receive actual notice.`,
    relatedTerms: ["proof-of-service", "complaint", "default-judgment", "certified-mail"],
    category: "Legal Process",
  },
  {
    term: "Proof of Service",
    slug: "proof-of-service",
    shortDef: "A document filed with the court verifying that legal papers were properly delivered to the opposing party.",
    longDef: `Proof of service is a sworn statement or affidavit filed with the court demonstrating that legal documents, such as a summons and complaint, were properly delivered to the opposing party in compliance with the applicable rules. Without proof of service, a court generally cannot proceed with a case or enter a judgment because there is no evidence the defendant was notified.

The proof of service typically includes the name of the person served, the date and time of service, the method used, the address where service occurred, and the identity of the person who performed the service. In many jurisdictions, the person who serves the documents must be someone other than a party to the case, such as a process server, sheriff, or any adult not involved in the lawsuit.

Failing to properly document service, or relying on a method not authorized by the applicable rules, can result in delays, dismissed cases, or overturned judgments. Courts take service requirements seriously because they are a fundamental component of due process, ensuring everyone has a fair opportunity to respond before a judgment is entered against them.`,
    relatedTerms: ["service-of-process", "affidavit", "default-judgment", "complaint"],
    category: "Legal Process",
  },
  {
    term: "Arbitration",
    slug: "arbitration",
    shortDef: "A private dispute resolution process where an independent arbitrator, rather than a judge, hears both sides and issues a binding decision.",
    longDef: `Arbitration is a form of alternative dispute resolution in which the parties submit their disagreement to one or more neutral arbitrators who hear evidence and arguments and then render a decision. In binding arbitration, the arbitrator's decision is final and enforceable in court, with very limited grounds for appeal. Non-binding arbitration allows either party to reject the decision and proceed to court.

Many consumer contracts, employment agreements, and service contracts include mandatory arbitration clauses requiring disputes to be resolved through arbitration rather than in court. These clauses are generally enforceable under the Federal Arbitration Act, though some states impose limits, particularly where the clause is buried in fine print or paired with a class action waiver that effectively eliminates a consumer's ability to pursue small-value claims.

Arbitration can be faster and less formal than court, but it also has drawbacks, including limited discovery, restricted appeal rights, and costs that can exceed small claims court filing fees. Understanding whether your dispute is subject to a mandatory arbitration clause is an important early step before deciding whether to send a demand letter, file a small claims case, or pursue arbitration.`,
    relatedTerms: ["mediation", "arbitration-clause", "class-action-waiver", "settlement"],
    category: "Legal Process",
  },
  {
    term: "Mediation",
    slug: "mediation",
    shortDef: "A voluntary dispute resolution process where a neutral mediator helps both parties negotiate a mutually acceptable agreement.",
    longDef: `Mediation is a form of alternative dispute resolution in which a trained, neutral third party, the mediator, facilitates a conversation between the disputing parties to help them reach a voluntary agreement. Unlike arbitration, the mediator does not decide the case or impose a solution. Instead, the mediator helps both sides communicate, identify their interests, and explore potential compromises.

Mediation can be agreed to voluntarily or ordered by a court as a prerequisite to trial. It is widely used in family law, employment disputes, landlord-tenant conflicts, business disagreements, and personal injury cases. Because the process is collaborative rather than adversarial, it often preserves relationships better than litigation and can result in creative solutions that a court could not order.

If mediation is successful, the parties typically sign a written settlement agreement that becomes a binding contract. If it fails, neither side's statements during the mediation can generally be used against them in court, which encourages open and honest negotiation without fear of legal consequences.`,
    relatedTerms: ["arbitration", "settlement", "settlement-agreement", "demand-letter"],
    category: "Legal Process",
  },
  {
    term: "Settlement",
    slug: "settlement",
    shortDef: "An agreement between disputing parties to resolve their dispute without a full trial, usually involving a payment or other concession.",
    longDef: `A settlement is an agreement reached between parties to a dispute that resolves the matter without proceeding to a full trial or hearing. Settlements can occur at any stage, from before a lawsuit is even filed all the way through trial. The vast majority of civil cases, some estimates suggest over 90 percent, settle before reaching a verdict.

Settlements typically involve a payment of money in exchange for the claimant releasing their claims, though they can also include non-monetary terms such as an agreement to perform certain actions, an apology, a change in business practices, or a confidentiality clause. Once both parties sign a settlement agreement, it becomes a binding contract enforceable in court.

A well-crafted demand letter is one of the most effective tools for initiating settlement negotiations because it clearly communicates the basis for the claim, the supporting evidence, and the specific amount or action being requested, giving the other party a clear picture of what they face if the dispute is not resolved.`,
    relatedTerms: ["settlement-agreement", "demand-letter", "mediation", "mutual-release"],
    category: "Legal Process",
  },
  {
    term: "Settlement Agreement",
    slug: "settlement-agreement",
    shortDef: "A legally binding written contract that memorializes the terms both parties agreed to in order to resolve a dispute.",
    longDef: `A settlement agreement is the formal written document that captures the terms under which the parties have agreed to resolve their dispute. It typically includes the amount to be paid, the timeline for payment, any non-monetary obligations, a release of claims by one or both parties, and often a confidentiality clause preventing either side from discussing the terms.

Once signed, a settlement agreement is an enforceable contract, meaning that if either party fails to comply with its terms, the other can go to court to enforce it, potentially recovering additional damages for breach of the settlement itself. Some settlement agreements are filed with the court and entered as a consent judgment, giving them the added weight of a court order.

Before signing a settlement agreement, it is important to read every provision carefully, particularly the scope of the release, which defines exactly which claims you are giving up. A broad release that covers all claims arising from the dispute may prevent you from pursuing related issues you had not fully considered at the time of settlement.`,
    relatedTerms: ["settlement", "release-of-claims", "mutual-release", "mediation"],
    category: "Legal Process",
  },
  {
    term: "Cease and Desist",
    slug: "cease-and-desist",
    shortDef: "A formal letter or legal order demanding that a party stop engaging in specific unlawful or harmful activity.",
    longDef: `A cease and desist letter is a formal communication demanding that the recipient immediately stop a specific activity that the sender believes is illegal, infringing, or harmful. Unlike a demand letter that typically requests monetary compensation, a cease and desist focuses primarily on stopping ongoing conduct, such as trademark infringement, copyright violations, harassment, defamation, or breach of a non-compete agreement.

Cease and desist letters can be sent by attorneys or by individuals acting on their own behalf. While the letter itself does not carry the force of law, it puts the recipient on formal notice that their conduct has been identified and that legal action may follow if they do not comply. This notice can become important evidence later because it eliminates any claim that the recipient did not know their conduct was objectionable.

A cease and desist order, as distinguished from a letter, is an actual directive issued by a court or government agency that carries legal consequences for non-compliance, including contempt of court charges or administrative penalties. The letter is often a precursor to seeking such an order if the recipient fails to comply.`,
    relatedTerms: ["demand-letter", "injunction", "restraining-order", "certified-mail"],
    category: "Legal Process",
  },
  {
    term: "Affidavit",
    slug: "affidavit",
    shortDef: "A written statement of facts made under oath and signed before a notary public, used as evidence in legal proceedings.",
    longDef: `An affidavit is a sworn, written statement of fact signed by the person making it, called the affiant, in the presence of a notary public or other authorized officer. Because the affiant swears under penalty of perjury that the contents are true, an affidavit carries significant legal weight and can be used as evidence in court proceedings, administrative hearings, and various legal transactions.

Affidavits are used in many contexts, including supporting motions in court, establishing facts for insurance claims, providing witness statements when someone cannot appear in person, verifying service of process, and documenting events for a demand letter or complaint. They are particularly useful when a witness's in-person testimony is not practical or when written documentation of specific facts needs to be preserved.

An affidavit must be based on personal knowledge, meaning the affiant can only swear to facts they directly observed or experienced, not hearsay or speculation. Making false statements in an affidavit constitutes perjury, which is a criminal offense that can result in fines and imprisonment.`,
    relatedTerms: ["notarization", "evidence", "proof-of-service", "deposition"],
    category: "Legal Process",
  },
  {
    term: "Notarization",
    slug: "notarization",
    shortDef: "The process of having a notary public officially verify the identity of a document signer and witness their signature.",
    longDef: `Notarization is the act of having a notary public, a state-commissioned official, verify the identity of the person signing a document, confirm that they are signing voluntarily and understand what they are signing, and then affix an official seal and signature to the document. This process does not verify the truthfulness of the document's contents but does authenticate the identity of the signer.

Notarization is required for many types of legal documents, including affidavits, deeds, powers of attorney, certain contracts, and various court filings. Some demand letters and settlement agreements may also be notarized to add an additional layer of formality and credibility, though notarization is not typically required for these documents.

Notary services are widely available at banks, shipping stores, law offices, and through mobile notary services that come to you. Many states now also allow remote online notarization, where the process is completed via video call. Fees are typically modest, often regulated by state law, and usually range from a few dollars to around twenty-five dollars per signature.`,
    relatedTerms: ["affidavit", "proof-of-service", "settlement-agreement", "certified-mail"],
    category: "Legal Process",
  },
  {
    term: "Lien",
    slug: "lien",
    shortDef: "A legal claim placed against property that secures payment of a debt and must be resolved before the property can be sold free and clear.",
    longDef: `A lien is a legal right or interest that a creditor has in a debtor's property, serving as security for a debt or obligation. Common types include mortgage liens securing home loans, mechanic's liens securing payment for construction or repair work, tax liens for unpaid taxes, and judgment liens attached to property after a court awards damages. The lien gives the creditor a claim against the property that must generally be satisfied before the property can be sold or transferred with clear title.

Liens can be voluntary, like a mortgage the owner agreed to when purchasing a home, or involuntary, like a lien filed by an unpaid contractor or a judgment creditor. An involuntary lien can significantly affect a property owner's ability to sell or refinance, making lien disputes a serious matter that often requires prompt legal action to resolve.

If you believe a lien has been improperly placed against your property, most states provide a formal process to challenge and remove it, often involving a written demand to the lien holder followed by a court motion if the lien holder refuses to release it. Contractors and suppliers also have strict deadlines for filing liens, and missing those deadlines can void the lien entirely.`,
    relatedTerms: ["garnishment", "judgment", "judgment-creditor", "default-judgment"],
    category: "Legal Process",
  },
  {
    term: "Garnishment",
    slug: "garnishment",
    shortDef: "A court-ordered process allowing a creditor to collect a debt directly from a debtor's wages or bank account.",
    longDef: `Garnishment is a legal collection tool that allows a creditor holding a court judgment to seize a portion of the debtor's wages, bank account funds, or other property directly, without needing further cooperation from the debtor. Federal law caps wage garnishment for most debts at the lesser of 25 percent of disposable earnings or the amount by which weekly earnings exceed 30 times the federal minimum wage, though some debts like child support and certain tax debts allow higher percentages.

Garnishment generally cannot happen without a court judgment first, with narrow exceptions for federal student loans, taxes, and child support, which allow administrative garnishment. Certain income sources, including Social Security benefits and most retirement funds, are largely protected from garnishment by ordinary creditors.

If you are facing a garnishment you believe is improper, whether the debt is invalid, past the statute of limitations, or exceeds legal limits, you generally have a limited window to object in court before the garnishment takes effect. Acting quickly and gathering supporting documentation is essential to preserving your rights.`,
    relatedTerms: ["judgment", "judgment-debtor", "default-judgment", "lien"],
    category: "Legal Process",
  },
  {
    term: "Fee Shifting",
    slug: "fee-shifting",
    shortDef: "A legal rule or contractual provision that requires the losing party in a lawsuit to pay the winning party's attorney fees.",
    longDef: `Fee shifting refers to legal rules or contract provisions that require one party, typically the losing party, to pay the other side's attorney fees and litigation costs. In the United States, the default rule is that each party pays their own attorney fees regardless of the outcome. However, many statutes specifically provide for fee shifting, particularly in consumer protection, civil rights, employment discrimination, and environmental cases, to encourage individuals to pursue valid but potentially costly claims.

Contractual fee-shifting provisions are also common, especially in commercial leases, loan agreements, and service contracts. These clauses may be one-sided, allowing only one party to recover fees, or mutual, allowing whichever party prevails to recover. Some states have laws that automatically make one-sided fee-shifting clauses mutual.

Fee shifting is an important consideration when evaluating whether to pursue or defend a claim because it can dramatically increase the stakes for both parties. A demand letter that mentions applicable fee-shifting statutes signals to the recipient that their potential exposure includes not only the claimed damages but also the sender's legal costs.`,
    relatedTerms: ["prevailing-party", "contingency-fee", "cause-of-action", "settlement"],
    category: "Legal Process",
  },
  {
    term: "Prevailing Party",
    slug: "prevailing-party",
    shortDef: "The party in a lawsuit who wins on the significant issues and is often entitled to recover attorney fees and costs from the other side.",
    longDef: `The prevailing party is the litigant who succeeds on the merits of the significant issues in a case. Under many statutes and contract provisions, the prevailing party is entitled to recover attorney fees and court costs from the losing side. Determining who is the prevailing party is not always straightforward, particularly when each side wins on some claims but loses on others.

Courts generally look at whether a party achieved a material alteration in the legal relationship between the parties, meaning they obtained an enforceable judgment, injunction, or other relief that changed their legal position. Simply obtaining a nominal or trivial award may not be enough to qualify as the prevailing party for purposes of fee recovery.

When a fee-shifting statute or contract clause exists, the possibility of being designated the prevailing party, and therefore recovering or having to pay attorney fees, is a powerful incentive for both sides to evaluate their positions realistically and consider settlement. Referencing this potential in a demand letter can add significant leverage.`,
    relatedTerms: ["fee-shifting", "judgment", "settlement", "contingency-fee"],
    category: "Legal Process",
  },
  {
    term: "Class Action",
    slug: "class-action",
    shortDef: "A lawsuit filed by one or more representative plaintiffs on behalf of a larger group of people with similar claims against the same defendant.",
    longDef: `A class action allows a small number of named plaintiffs to sue on behalf of a much larger group of people, called the class, who suffered similar harm from the same conduct, typically involving a defective product, deceptive practice, or data breach. This structure makes it economically feasible to pursue claims that would be too small to justify individual lawsuits.

Before a class action can proceed, a court must certify the class, confirming that the claims share common questions of law or fact, that the representative plaintiffs adequately represent the group, and that a class action is a superior method for resolving the dispute compared to individual suits. Class certification is often the most hotly contested stage of the litigation.

If a business's mandatory arbitration clause includes a class action waiver, which is common and generally enforceable, affected consumers may be limited to individual arbitration or small claims court instead. It is worth checking whether an existing class action already covers your situation before pursuing an individual demand letter or claim, since joining an existing class may be more efficient.`,
    relatedTerms: ["plaintiff", "consumer-protection", "class-action-waiver", "arbitration-clause"],
    category: "Legal Process",
  },
  {
    term: "Pro Se",
    slug: "pro-se",
    shortDef: "Representing yourself in a legal proceeding without an attorney.",
    longDef: `Pro se, a Latin term meaning for oneself, refers to a person who represents themselves in a legal proceeding without hiring an attorney. Pro se litigants are common in small claims court, family court, landlord-tenant disputes, and other matters where the amount in controversy may not justify the cost of legal representation or where attorneys are not permitted.

While everyone has the right to represent themselves in civil and criminal proceedings, pro se litigants are generally held to the same procedural rules and standards as attorneys, though some courts may provide a degree of leniency on procedural technicalities. Many courts offer self-help centers, form packets, and procedural guides designed specifically to help pro se litigants navigate the process.

When representing yourself, preparation is critical. This includes understanding the relevant legal standards, organizing your evidence clearly, practicing your presentation, and knowing what you need to prove. A well-drafted demand letter, thorough documentation, and a clear timeline of events are among the most important tools for a pro se litigant.`,
    relatedTerms: ["small-claims-court", "legal-aid", "filing-fee", "demand-letter"],
    category: "Legal Process",
  },
  {
    term: "Legal Aid",
    slug: "legal-aid",
    shortDef: "Free or low-cost legal services provided to individuals who cannot afford to hire a private attorney.",
    longDef: `Legal aid refers to free or reduced-cost legal assistance available to individuals who meet certain income qualifications, typically at or below 125 to 200 percent of the federal poverty level. Legal aid organizations, funded by a combination of federal and state grants, private donations, and pro bono attorney time, provide services ranging from advice and brief consultations to full representation in court.

Legal aid is most commonly available for civil matters including housing disputes, domestic violence, family law, consumer issues, public benefits, and immigration. Most legal aid offices do not handle criminal cases, which are instead covered by public defenders. Availability varies significantly by location, and many legal aid organizations have more demand than they can serve, leading to waitlists or restrictions on the types of cases they accept.

If you cannot afford an attorney but need legal help, contacting your local legal aid office is a good first step. Many state and local bar associations also maintain lawyer referral services that offer initial consultations at reduced rates, and law school clinics provide free legal assistance in certain practice areas.`,
    relatedTerms: ["pro-se", "contingency-fee", "retainer", "small-claims-court"],
    category: "Legal Process",
  },
  {
    term: "Contingency Fee",
    slug: "contingency-fee",
    shortDef: "A payment arrangement where an attorney receives a percentage of the client's recovery instead of charging hourly fees upfront.",
    longDef: `A contingency fee is a payment structure where an attorney agrees to represent a client without charging upfront fees, instead taking a percentage, typically between 25 and 40 percent, of any amount recovered through settlement or judgment. If the client does not win or recover anything, the attorney receives no fee. This arrangement makes legal representation accessible to people who could not otherwise afford to hire an attorney.

Contingency fees are most common in personal injury, medical malpractice, employment discrimination, and consumer protection cases, where the expected recovery is large enough to justify the arrangement. They are less common or prohibited in certain areas such as criminal defense and family law. The specific percentage and whether costs are deducted before or after calculating the fee should be clearly spelled out in a written agreement.

While contingency fees eliminate the risk of paying legal fees out of pocket, clients should understand that they may still be responsible for certain litigation costs, such as filing fees, expert witness fees, and deposition expenses, regardless of the outcome, unless the fee agreement specifically provides otherwise.`,
    relatedTerms: ["retainer", "billable-hour", "fee-shifting", "prevailing-party"],
    category: "Legal Process",
  },
  {
    term: "Retainer",
    slug: "retainer",
    shortDef: "An upfront payment made to an attorney to secure their services, typically held in a trust account and drawn down as work is performed.",
    longDef: `A retainer is an advance payment a client makes to an attorney to engage their services. The funds are typically deposited into a client trust account and drawn down as the attorney performs work at their hourly rate. A retainer agreement should clearly specify the hourly rate, the scope of work covered, how the retainer will be applied, and what happens if the retainer is exhausted before the work is complete.

Retainers serve two purposes: they secure the attorney's commitment to take on the case and provide working capital for the attorney to begin performing legal services. If the retainer is not fully used, the unused portion should be refunded to the client. If additional work is needed beyond the initial retainer, the attorney may request a replenishment of funds.

Before paying a retainer, it is important to understand the total estimated cost of the legal matter, since the retainer itself is often just an initial payment rather than a cap on total fees. Ask for a clear written engagement letter explaining the billing terms, and keep track of the attorney's invoices to ensure the retainer is being applied correctly.`,
    relatedTerms: ["billable-hour", "contingency-fee", "attorney-client-privilege", "legal-aid"],
    category: "Legal Process",
  },
  {
    term: "Billable Hour",
    slug: "billable-hour",
    shortDef: "A unit of time, typically measured in six-minute increments, that an attorney charges a client for work performed on their case.",
    longDef: `The billable hour is the most common method attorneys use to charge for their services, where each hour or fraction of an hour spent working on a client's matter is recorded and billed at the attorney's stated hourly rate. Most attorneys bill in increments of one-tenth of an hour, or six minutes, meaning even a brief phone call or email review may be billed as a minimum of six minutes of time.

Hourly rates vary dramatically based on the attorney's experience, geographic location, and area of practice, ranging from under $150 per hour for newer attorneys in smaller markets to $1,000 or more per hour for senior partners at major law firms. Clients should receive regular, itemized invoices showing the date, description, and time spent on each task.

Understanding how billable hours work is important for managing legal costs. Consolidating questions into single calls or emails, providing well-organized documents, and handling simple tasks yourself, such as gathering records or drafting the initial timeline of events, can significantly reduce the number of hours your attorney needs to bill.`,
    relatedTerms: ["retainer", "contingency-fee", "fee-shifting", "legal-aid"],
    category: "Legal Process",
  },
  {
    term: "Attorney-Client Privilege",
    slug: "attorney-client-privilege",
    shortDef: "A legal protection that keeps confidential communications between an attorney and their client from being disclosed without consent.",
    longDef: `Attorney-client privilege is a fundamental legal protection that prevents the forced disclosure of confidential communications between an attorney and their client made for the purpose of seeking or providing legal advice. This privilege belongs to the client, not the attorney, and can only be waived by the client. It survives even after the attorney-client relationship ends.

The privilege covers communications made in confidence between the client and attorney, including oral conversations, emails, letters, and documents shared for the purpose of obtaining legal counsel. It does not protect underlying facts, only the communications themselves. For example, a client cannot hide a relevant document from discovery simply by sharing it with their attorney, but the client's conversation with the attorney about that document is protected.

The privilege can be inadvertently waived if the client shares the privileged communication with third parties, discusses attorney advice publicly, or fails to maintain the confidentiality of the communication. This is why attorneys typically advise clients not to forward attorney communications to others or discuss legal strategy outside the attorney-client relationship.`,
    relatedTerms: ["retainer", "pro-se", "discovery", "evidence"],
    category: "Legal Process",
  },
  {
    term: "Cause of Action",
    slug: "cause-of-action",
    shortDef: "The specific legal theory or set of facts that gives a person the right to bring a lawsuit and seek a remedy from a court.",
    longDef: `A cause of action is the legal basis for a lawsuit, consisting of the specific set of facts and the legal theory that, taken together, give a plaintiff the right to seek a judicial remedy. Common causes of action include breach of contract, negligence, fraud, unjust enrichment, and violations of specific consumer protection statutes. Each cause of action has its own required elements that must be proven for the claim to succeed.

A single dispute can give rise to multiple causes of action. For example, a contractor who takes payment but fails to complete the work might face claims for breach of contract, unjust enrichment, and violations of a state consumer protection law, all arising from the same facts. Identifying every applicable cause of action is important because each may offer different remedies, different statutes of limitations, and different burdens of proof.

When writing a demand letter, clearly identifying your cause or causes of action tells the recipient exactly what legal claims they face and what you would need to prove in court, which can make the demand more persuasive and provide a stronger foundation if litigation becomes necessary.`,
    relatedTerms: ["complaint", "statute-of-limitations", "breach-of-contract", "negligence"],
    category: "Legal Process",
  },
  {
    term: "Small Claims Court",
    slug: "small-claims-court",
    shortDef: "A simplified court division designed to resolve low-dollar disputes quickly and affordably without requiring a lawyer.",
    longDef: `Small claims court is a special division of the civil court system built for disputes involving relatively small amounts of money, typically ranging from $2,500 to $25,000 depending on the state. The process is designed to be accessible to people without legal training: filing fees are low, procedural rules are relaxed, and in many states attorneys are not even allowed to represent parties.

Most small claims cases are resolved in a single hearing rather than through a long litigation process. A judge or magistrate hears both sides, reviews any documents or evidence presented, and issues a decision, often the same day. There is usually no jury, no formal discovery, and no complex motion practice.

Because small claims court is designed for self-represented litigants, it is frequently the next step after a demand letter goes unanswered or is rejected. Filing a claim shows the other party you are serious and creates a binding court judgment if you win, which can then be enforced through collection tools like wage garnishment or bank levies.`,
    relatedTerms: ["filing-fee", "plaintiff", "defendant", "jurisdiction", "default-judgment"],
    category: "Court",
  },
  {
    term: "Plaintiff",
    slug: "plaintiff",
    shortDef: "The party who initiates a lawsuit by filing a complaint against another party in court.",
    longDef: `The plaintiff is the individual, business, or entity that starts a civil lawsuit by filing a complaint in court. The plaintiff bears the initial burden of stating a valid legal claim and, in most civil cases, must prove that claim by a preponderance of the evidence, meaning it is more likely than not that their version of events is true.

In a demand letter context, the person sending the letter is effectively acting as the would-be plaintiff, asserting that a wrong occurred and requesting a remedy before formal litigation begins. Framing a demand letter the way a plaintiff would frame a complaint, with clear facts, a stated legal basis, and a specific request, often makes it more effective.

If a case does go to court, the plaintiff is responsible for filing fees, arranging service of process on the defendant, and presenting evidence to support their claims at any hearing. The plaintiff also has the right to dismiss their case voluntarily if a settlement is reached or if they choose not to proceed.`,
    relatedTerms: ["defendant", "complaint", "burden-of-proof", "filing-fee"],
    category: "Court",
  },
  {
    term: "Defendant",
    slug: "defendant",
    shortDef: "The party against whom a lawsuit is filed and who must respond to the plaintiff's claims.",
    longDef: `The defendant is the person or entity being sued in a civil case. Once served with a summons and complaint, the defendant typically has a limited window, often 20 to 30 days, to file a written response either admitting or denying the allegations and raising any defenses.

A defendant who fails to respond risks having a default judgment entered against them automatically, without ever presenting their side of the case. Defendants can also file a counterclaim if they believe the plaintiff owes them something as well, effectively turning the case into a two-way dispute.

When a demand letter is sent, the recipient is essentially being given a chance to resolve the dispute before becoming a formal defendant in a lawsuit. Responding to a demand letter promptly and in good faith can often prevent a case from escalating to court at all, saving both parties significant time and expense.`,
    relatedTerms: ["plaintiff", "complaint", "default-judgment", "answer"],
    category: "Court",
  },
  {
    term: "Jurisdiction",
    slug: "jurisdiction",
    shortDef: "A court's legal authority to hear and decide a particular case based on geography, subject matter, or dollar amount.",
    longDef: `Jurisdiction refers to a court's authority to hear and decide a case. There are two main types: personal jurisdiction, which asks whether the court has authority over the specific parties involved, usually based on where they live or do business, and subject-matter jurisdiction, which asks whether the court is authorized to hear that type of case at all.

Small claims courts, for example, only have subject-matter jurisdiction over disputes below a certain dollar threshold set by state law. Federal courts have jurisdiction over cases involving federal law and disputes between citizens of different states exceeding $75,000 in controversy. Filing in the wrong court or against a defendant with no connection to that state can result in a case being dismissed regardless of its merits.

Before sending a demand letter or filing a claim, it is worth confirming which court would actually have jurisdiction over your dispute. This usually depends on where the defendant lives, where the underlying incident occurred, or where a contract was signed or performed.`,
    relatedTerms: ["venue", "small-claims-court", "complaint", "filing-fee"],
    category: "Court",
  },
  {
    term: "Venue",
    slug: "venue",
    shortDef: "The specific geographic court location where a case should properly be filed and heard.",
    longDef: `Venue determines which specific courthouse, out of all the courts that might have jurisdiction, is the appropriate place to file a case. While jurisdiction asks whether a court has the power to hear a type of dispute, venue asks which location makes the most practical sense, usually tied to where the defendant resides, where a business operates, or where the events giving rise to the dispute took place.

Venue rules exist largely for fairness and convenience, ensuring that defendants are not forced to litigate in a location with no real connection to the case. Many contracts include a venue clause specifying in advance where any disputes must be filed, which courts generally enforce unless it would be unreasonable.

Getting venue wrong can lead to a case being transferred or dismissed, so it is worth double-checking local court rules, especially for small claims filings, before submitting paperwork. In some states, filing in an improper venue may merely result in a transfer to the correct court rather than an outright dismissal.`,
    relatedTerms: ["jurisdiction", "small-claims-court", "complaint", "filing-fee"],
    category: "Court",
  },
  {
    term: "Filing Fee",
    slug: "filing-fee",
    shortDef: "The court cost required to open a lawsuit or small claims case, typically ranging from $30 to $200.",
    longDef: `A filing fee is the payment a court requires before it will accept and process a new case. In small claims court, filing fees are intentionally kept low, often between $30 and $100, though they can scale up with the dollar amount being claimed. Larger civil cases filed in regular trial courts typically carry higher fees.

Most jurisdictions allow the winning party to recover filing fees as part of the judgment, meaning the losing side ultimately reimburses the cost. Courts also offer fee waivers for people who cannot afford the cost, usually through a form documenting income and household size.

Before filing a case, it is worth checking whether a demand letter can resolve the dispute first. Many businesses and individuals settle once they receive a clear, well-documented demand, saving both sides the time and expense of the filing fee and court process altogether.`,
    relatedTerms: ["small-claims-court", "plaintiff", "complaint", "jurisdiction"],
    category: "Court",
  },
  {
    term: "Default Judgment",
    slug: "default-judgment",
    shortDef: "A court ruling entered automatically in favor of the plaintiff when the defendant fails to respond to a lawsuit within the required time.",
    longDef: `A default judgment is entered when a defendant who has been properly served fails to respond within the required time frame. Rather than holding a full hearing on the merits, the court simply rules in the plaintiff's favor because the defendant never contested the claims.

Default judgments carry the same legal weight as a judgment reached after a full hearing and can be enforced through wage garnishment, bank levies, or property liens. However, they can sometimes be reopened if the defendant can show good cause for missing the deadline, such as never actually being served or excusable neglect.

For plaintiffs, a default judgment is often the fastest possible path to a legal win, but it only has value if the defendant actually has assets or income that can be collected against. This is worth considering before spending time and filing fees on a lawsuit against a defendant with no ability to pay.`,
    relatedTerms: ["service-of-process", "judgment", "garnishment", "complaint"],
    category: "Court",
  },
  {
    term: "Subpoena",
    slug: "subpoena",
    shortDef: "A legal order requiring a person to testify or produce documents for a court proceeding or investigation.",
    longDef: `A subpoena is a court-issued order compelling someone to do one of two things: appear and testify, known as a subpoena ad testificandum, or produce documents and records, known as a subpoena duces tecum. Ignoring a valid subpoena can result in being held in contempt of court, which carries fines or other penalties.

Subpoenas are commonly used to obtain records from third parties who are not directly involved in a lawsuit but who hold relevant information, such as banks, employers, or medical providers. They can also be used to compel witnesses to appear at a deposition or trial.

While subpoenas are typically only available once a lawsuit has been filed, gathering the same type of documentation voluntarily, such as bank statements, repair records, and correspondence, before sending a demand letter can accomplish much of the same goal without needing court involvement.`,
    relatedTerms: ["discovery", "deposition", "evidence", "complaint"],
    category: "Court",
  },
  {
    term: "Discovery",
    slug: "discovery",
    shortDef: "The pre-trial phase where both sides exchange evidence, documents, and information relevant to the case.",
    longDef: `Discovery is the formal process in litigation where each side requests and exchanges information relevant to the dispute. Common discovery tools include written interrogatories, which are questions the other side must answer under oath, requests for production of documents, requests for admission, and depositions.

The goal of discovery is to prevent trial by ambush, ensuring both sides know the key evidence and arguments before a hearing so that cases are decided on the facts rather than surprise. Discovery is largely unavailable in small claims court, where the informal process is designed to move quickly, but it plays a central role in larger civil litigation.

Because discovery can be expensive and time-consuming, it is one of the biggest reasons parties in bigger disputes often try to settle before a case gets that far. A clear, well-documented demand letter can sometimes achieve the same clarifying effect discovery would, without the cost and delay.`,
    relatedTerms: ["deposition", "subpoena", "evidence", "interrogatories"],
    category: "Court",
  },
  {
    term: "Deposition",
    slug: "deposition",
    shortDef: "Sworn out-of-court testimony given by a witness or party, recorded by a court reporter for potential use at trial.",
    longDef: `A deposition is a formal, sworn statement taken outside of court as part of the discovery process, usually with attorneys from both sides present and a court reporter transcribing everything. The person being deposed answers questions under oath, and the testimony can later be used at trial, including to challenge the person if their story changes.

Depositions are a standard tool in larger civil cases, including personal injury and employment litigation, but they are rarely used in small claims matters due to their cost and formality. They are one reason litigation can become expensive quickly once a case moves beyond the small claims threshold.

Understanding that depositions exist can be useful context when drafting a demand letter for a larger claim, as it signals to the recipient that if the matter proceeds to litigation, they may eventually have to testify under oath about the underlying facts.`,
    relatedTerms: ["discovery", "subpoena", "evidence", "affidavit"],
    category: "Court",
  },
  {
    term: "Preponderance of Evidence",
    slug: "preponderance-of-evidence",
    shortDef: "The standard of proof in most civil cases, requiring a party to show their version of events is more likely true than not.",
    longDef: `Preponderance of the evidence is the standard of proof applied in most civil cases, meaning the party with the burden of proof must demonstrate that their version of events is more likely true than not true, essentially more than a 50 percent likelihood. This is a significantly lower standard than the beyond a reasonable doubt standard used in criminal cases.

In practical terms, this means a plaintiff does not need to prove their case with absolute certainty. They need only tip the scales slightly in their favor by presenting evidence that makes their account more believable than the defendant's. The quality, credibility, and persuasiveness of the evidence matters more than the sheer quantity.

Understanding this standard is useful when preparing a demand letter or small claims case because it helps focus your preparation on the evidence that most directly supports each fact you need to prove, rather than trying to address every conceivable detail of the dispute.`,
    relatedTerms: ["burden-of-proof", "evidence", "plaintiff", "small-claims-court"],
    category: "Court",
  },
  {
    term: "Burden of Proof",
    slug: "burden-of-proof",
    shortDef: "The obligation falling on one party to prove the facts in dispute to a required standard of certainty.",
    longDef: `The burden of proof determines which party must prove a disputed fact and how convincingly they must prove it. In most civil cases, including small claims and personal injury disputes, the plaintiff must prove their claims by a preponderance of the evidence, meaning it is more likely than not that their version of events is accurate.

This is a lower standard than the beyond a reasonable doubt standard used in criminal cases. Certain claims, such as fraud, may require a higher standard called clear and convincing evidence. Once a plaintiff meets their burden on a particular element, the burden may shift to the defendant to prove any affirmative defenses they are raising.

Understanding the burden of proof is useful when preparing a demand letter or a small claims case. Focus on the evidence that most directly supports each fact you need to prove, rather than including every detail of the dispute. Strong, organized evidence that clearly addresses each element of your claim is more effective than a large volume of marginally relevant material.`,
    relatedTerms: ["preponderance-of-evidence", "evidence", "plaintiff", "complaint"],
    category: "Court",
  },
  {
    term: "Appeal",
    slug: "appeal",
    shortDef: "A request asking a higher court to review and potentially reverse a lower court's decision based on legal error.",
    longDef: `An appeal asks a higher court to review whether the lower court made a legal error, either in how it applied the law or in the procedures it followed. Appellate courts generally do not re-hear evidence or witness testimony; instead, they review the written record from the original case to determine whether the outcome should stand.

Appeals are subject to strict deadlines, often 30 days or less from the date of judgment, and typically require filing fees and formal legal briefs. Because of the cost and complexity involved, and because appellate courts give significant deference to the original judge or jury's factual findings, appeals of small claims decisions are relatively uncommon.

Some states limit or entirely bar appeals from small claims court, particularly for the party who filed the original claim. This is one reason it is worth presenting your strongest evidence the first time a case is heard, rather than assuming you will have a second chance on appeal.`,
    relatedTerms: ["judgment", "small-claims-court", "motion-to-dismiss", "summary-judgment"],
    category: "Court",
  },
  {
    term: "Complaint",
    slug: "complaint",
    shortDef: "The formal written document that starts a lawsuit by laying out the plaintiff's claims and requested relief.",
    longDef: `In litigation, a complaint is the initial pleading a plaintiff files with the court to formally begin a lawsuit. It identifies the parties, describes the factual background of the dispute, states the specific legal claims, called causes of action, being brought, and requests a specific remedy, whether that is money damages, an order to do or stop doing something, or both.

A complaint must generally state enough facts to show the plaintiff has a plausible legal claim. Vague or conclusory allegations can be dismissed by the court before the case even proceeds. In small claims court, the complaint is often just a simple form describing the dispute in a few sentences rather than a formal legal document.

Many of the same elements found in a formal court complaint, a clear statement of facts, the legal basis for the claim, and the specific remedy sought, are also present in a well-drafted demand letter. Writing a demand letter with this structure in mind often makes it more persuasive and easier to convert into a court filing if necessary.`,
    relatedTerms: ["plaintiff", "defendant", "cause-of-action", "answer"],
    category: "Court",
  },
  {
    term: "Answer",
    slug: "answer",
    shortDef: "The defendant's formal written response to a complaint, addressing each allegation and raising any defenses.",
    longDef: `An answer is the formal written document a defendant files with the court in response to the plaintiff's complaint. In the answer, the defendant must respond to each allegation in the complaint by admitting, denying, or stating they lack sufficient knowledge to admit or deny the claim. The answer may also include affirmative defenses, which are legal reasons why the defendant should not be held liable even if the plaintiff's allegations are true.

The deadline for filing an answer is typically 20 to 30 days after the defendant is served with the complaint, though the exact timeframe varies by jurisdiction. Failing to file an answer within the deadline can result in a default judgment being entered against the defendant.

In small claims court, the answer process is usually much simpler, sometimes requiring only that the defendant appear at the hearing to present their side. In larger civil cases, the answer is the defendant's first opportunity to formally state their position and begin shaping the legal framework of the dispute.`,
    relatedTerms: ["complaint", "defendant", "default-judgment", "motion-to-dismiss"],
    category: "Court",
  },
  {
    term: "Motion to Dismiss",
    slug: "motion-to-dismiss",
    shortDef: "A formal request asking the court to throw out a case because the complaint fails to state a valid legal claim.",
    longDef: `A motion to dismiss is a procedural request by the defendant asking the court to throw out the plaintiff's case without a full hearing on the merits. The most common grounds for dismissal include failure to state a claim upon which relief can be granted, meaning the complaint does not allege facts that would support a legal remedy even if everything stated were true, as well as lack of jurisdiction, improper venue, or failure to serve the defendant properly.

Motions to dismiss are decided based on the complaint alone, without considering evidence from either side. The court assumes the plaintiff's factual allegations are true and asks only whether those facts, taken at face value, would give rise to a valid legal claim. This is a relatively high bar for the defendant because most judges give plaintiffs the benefit of the doubt at this early stage.

In small claims court, formal motions to dismiss are uncommon because the procedures are simplified. However, understanding the concept is useful because it highlights the importance of including a clear legal basis for your claim in any demand letter or complaint.`,
    relatedTerms: ["complaint", "answer", "summary-judgment", "jurisdiction"],
    category: "Court",
  },
  {
    term: "Summary Judgment",
    slug: "summary-judgment",
    shortDef: "A court ruling issued without a full trial when the undisputed facts show that one party is entitled to win as a matter of law.",
    longDef: `Summary judgment is a procedural mechanism that allows a court to decide a case, or specific issues within a case, without a full trial when there is no genuine dispute about the material facts and one party is entitled to judgment as a matter of law. Either the plaintiff or defendant can file a motion for summary judgment.

The moving party must demonstrate, through affidavits, depositions, documents, and other evidence, that the key facts are not genuinely in dispute and that the law compels a ruling in their favor. The opposing party must then show that there is a genuine issue of material fact that requires a trial to resolve. If the court grants summary judgment, the case or the relevant claims end without a trial.

Summary judgment is not available in small claims court, but it is an important part of larger civil litigation. Understanding the concept underscores the value of preserving strong documentary evidence from the outset, since a case supported by clear, undisputed documentation may be resolved more quickly and favorably.`,
    relatedTerms: ["motion-to-dismiss", "judgment", "evidence", "discovery"],
    category: "Court",
  },
  {
    term: "Judgment",
    slug: "judgment",
    shortDef: "The court's final official decision resolving a lawsuit and determining the rights and obligations of the parties.",
    longDef: `A judgment is the court's final decision in a case, resolving the dispute and establishing the legal rights and obligations of the parties. In a money judgment, the court orders the losing party to pay a specified amount to the winning party. Judgments can also require or prohibit specific actions through injunctions or declaratory relief.

Once entered, a judgment becomes a legally enforceable obligation. If the losing party does not voluntarily comply, the winning party can use collection tools such as wage garnishment, bank account levies, and property liens to enforce the judgment. Judgments typically accrue interest until paid and remain enforceable for a significant period, often 10 to 20 years depending on the state, and can usually be renewed.

Obtaining a judgment is only part of the process. Actually collecting on a judgment can be challenging if the debtor has limited assets or income. This practical reality is worth considering when deciding whether to pursue litigation or whether a negotiated settlement for a smaller amount might actually result in a better outcome.`,
    relatedTerms: ["default-judgment", "judgment-debtor", "judgment-creditor", "garnishment"],
    category: "Court",
  },
  {
    term: "Judgment Debtor",
    slug: "judgment-debtor",
    shortDef: "The party against whom a court judgment has been entered and who owes money or an obligation to the judgment creditor.",
    longDef: `A judgment debtor is the party who has lost a lawsuit and owes money or an obligation to the winning party, the judgment creditor. Once a judgment is entered, the debtor is legally required to satisfy the judgment, including any interest that accrues. If the judgment debtor does not pay voluntarily, the creditor can pursue enforcement measures such as wage garnishment, bank account levies, and property liens.

Judgment debtors may be required to participate in a debtor's examination, also called a supplemental proceeding, where they must answer questions under oath about their income, assets, bank accounts, and employment. This information helps the judgment creditor identify assets that can be targeted for collection.

In some cases, a judgment debtor who truly has no assets or income may be considered judgment-proof, meaning that while the judgment remains valid and accrues interest, there is nothing currently available to collect. The judgment creditor can wait and attempt to collect later if the debtor's financial situation improves.`,
    relatedTerms: ["judgment-creditor", "judgment", "garnishment", "satisfaction-of-judgment"],
    category: "Court",
  },
  {
    term: "Judgment Creditor",
    slug: "judgment-creditor",
    shortDef: "The party who has won a court judgment and is entitled to collect the amount owed from the losing party.",
    longDef: `A judgment creditor is the party who has successfully won a lawsuit and obtained a court judgment against the debtor, entitling them to use formal legal collection tools to recover the amount owed. Winning the judgment is only the first step; the judgment creditor must still take additional legal action to actually collect, such as garnishing wages, levying bank accounts, or placing liens on property.

Judgments generally accrue interest until paid, and remain enforceable for years, often 10 to 20 years depending on the state, and can typically be renewed if not satisfied within that window. The interest rate on judgments is usually set by state law and can add substantially to the total amount owed over time.

If you are a judgment creditor trying to collect, the process usually starts with locating the debtor's assets or employer through discovery tools like a debtor's examination, then applying for the appropriate garnishment or levy order from the court. Some creditors hire collection attorneys or agencies to handle this process.`,
    relatedTerms: ["judgment-debtor", "judgment", "garnishment", "lien"],
    category: "Court",
  },
  {
    term: "Satisfaction of Judgment",
    slug: "satisfaction-of-judgment",
    shortDef: "A formal court filing confirming that a judgment has been fully paid or otherwise resolved.",
    longDef: `A satisfaction of judgment is a document filed with the court confirming that the judgment debtor has fully paid or otherwise satisfied the terms of a court judgment. Once filed, it officially closes the case and releases the debtor from any further obligation under that judgment. In most jurisdictions, the judgment creditor is required to file a satisfaction within a specific time period after receiving full payment.

The satisfaction of judgment is important because it clears the public record, which can affect the debtor's credit, ability to sell property, and eligibility for certain licenses. Without a formal satisfaction on file, the judgment may continue to appear as an outstanding obligation even after it has been paid.

If you are a judgment debtor who has paid in full and the creditor has not filed a satisfaction, most states allow you to file a motion with the court requesting that it compel the creditor to do so. Some states also impose penalties on creditors who fail to file a satisfaction within the required timeframe after receiving full payment.`,
    relatedTerms: ["judgment", "judgment-debtor", "judgment-creditor", "lien"],
    category: "Court",
  },
  {
    term: "Injunction",
    slug: "injunction",
    shortDef: "A court order requiring a party to do or stop doing a specific act, enforceable by contempt of court penalties.",
    longDef: `An injunction is a court order that requires a party to take a specific action or, more commonly, to stop doing something. Injunctions are an equitable remedy, meaning they are used when monetary damages alone would not adequately address the harm. They are commonly sought in cases involving ongoing harassment, intellectual property infringement, environmental damage, breach of non-compete agreements, and other situations where continued conduct would cause irreparable harm.

There are three main types: temporary restraining orders, which are emergency short-term orders issued quickly and often without notice to the other party, preliminary injunctions issued after a hearing to maintain the status quo during litigation, and permanent injunctions entered as part of a final judgment. To obtain a preliminary injunction, the requesting party typically must show a likelihood of success on the merits, irreparable harm without the injunction, that the balance of hardships tips in their favor, and that the injunction serves the public interest.

Violating an injunction can result in contempt of court charges, which may include fines, sanctions, or even imprisonment, making injunctions a powerful enforcement tool when compliance with a court order is critical.`,
    relatedTerms: ["restraining-order", "cease-and-desist", "judgment", "complaint"],
    category: "Court",
  },
  {
    term: "Restraining Order",
    slug: "restraining-order",
    shortDef: "A court order prohibiting a person from contacting or approaching another person, typically issued for protection from harassment or abuse.",
    longDef: `A restraining order, also called a protective order in many jurisdictions, is a court order that prohibits one person from contacting, approaching, or harassing another. Restraining orders are most commonly associated with domestic violence and stalking situations, but they can also be issued in other contexts, such as neighbor disputes, workplace harassment, or civil harassment cases.

The process typically involves two stages: a temporary restraining order, which can be granted quickly, sometimes the same day, based on the petitioner's sworn statement alone, and a permanent restraining order, which is issued after a hearing where both parties have the opportunity to present evidence. Permanent orders typically last one to five years and can be renewed.

Violating a restraining order is a criminal offense that can result in arrest, fines, and jail time, regardless of who initiated the contact. Restraining orders may also address related issues such as temporary custody of children, possession of a shared residence, and financial support. Filing for a restraining order is free in most jurisdictions for domestic violence cases.`,
    relatedTerms: ["injunction", "cease-and-desist", "complaint", "evidence"],
    category: "Court",
  },
  {
    term: "Evidence",
    slug: "evidence",
    shortDef: "Documents, testimony, photographs, and other materials used to prove or disprove facts in a legal proceeding.",
    longDef: `Evidence is anything offered to prove or disprove a disputed fact in a legal proceeding. Documents, photographs, receipts, emails, text messages, witness testimony, expert reports, and physical objects can all qualify. Courts apply rules governing what evidence is admissible, generally requiring that it be relevant, authentic, and not unfairly prejudicial.

In small claims and consumer disputes, common and highly persuasive evidence includes contracts, invoices, repair estimates, photos of damage, and written communications like emails or text messages documenting what happened. Organizing this evidence clearly, in chronological order with dates and amounts, makes both a demand letter and any later court case far more effective.

Even outside of a courtroom, strong evidence is often what determines whether a demand letter gets a serious response. A business or individual is far more likely to pay a claim or settle it when the demand includes clear documentation rather than unsupported assertions.`,
    relatedTerms: ["discovery", "burden-of-proof", "affidavit", "admissibility"],
    category: "Court",
  },
  {
    term: "Hearsay",
    slug: "hearsay",
    shortDef: "An out-of-court statement offered in court to prove the truth of the matter it asserts, which is generally inadmissible.",
    longDef: `Hearsay is a statement made outside of court that is offered as evidence to prove the truth of what it asserts. Under the rules of evidence, hearsay is generally inadmissible because the person who originally made the statement is not present in court to be cross-examined about its accuracy and truthfulness. The hearsay rule is one of the most fundamental evidentiary rules in the American legal system.

However, the hearsay rule has many exceptions. Common exceptions include statements made for the purpose of medical treatment, business records kept in the regular course of business, excited utterances made during or immediately after a startling event, statements against the declarant's own interest, and official public records. These exceptions exist because such statements are considered inherently more reliable.

In small claims court, the hearsay rule is typically relaxed significantly, with judges having broad discretion to consider evidence that might be excluded in a formal trial. However, understanding hearsay basics is still useful because direct evidence, such as your own testimony, documents you personally created or received, and photographs you personally took, will always carry more weight than secondhand accounts.`,
    relatedTerms: ["evidence", "admissibility", "deposition", "affidavit"],
    category: "Court",
  },
  {
    term: "Admissibility",
    slug: "admissibility",
    shortDef: "The legal determination of whether a piece of evidence meets the rules required for it to be considered by a court.",
    longDef: `Admissibility refers to whether a particular piece of evidence meets the legal requirements to be considered by a judge or jury in deciding a case. Evidence must generally be relevant, meaning it tends to make a fact in the case more or less probable, authenticated, meaning there is sufficient proof that it is what it claims to be, and not subject to an exclusionary rule such as the hearsay rule or a privilege.

Common reasons evidence may be deemed inadmissible include hearsay without an applicable exception, evidence obtained through an illegal search in criminal cases, communications protected by attorney-client privilege, evidence whose prejudicial effect substantially outweighs its probative value, and documents or recordings that cannot be properly authenticated.

In small claims court, the rules of evidence are generally relaxed, and judges have broader discretion to consider evidence that might be excluded in a formal trial. Nevertheless, presenting well-organized, clearly authenticated evidence, such as original documents, photographs with dates, and firsthand testimony, gives your case the strongest foundation regardless of which court you are in.`,
    relatedTerms: ["evidence", "hearsay", "exhibit", "burden-of-proof"],
    category: "Court",
  },
  {
    term: "Exhibit",
    slug: "exhibit",
    shortDef: "A document, photograph, or other item formally presented as evidence during a court proceeding and marked for identification.",
    longDef: `An exhibit is a document, photograph, object, or other item that is formally presented and marked for identification during a court proceeding or deposition. Exhibits are typically labeled sequentially, such as Exhibit A, Exhibit B, or Plaintiff's Exhibit 1, Plaintiff's Exhibit 2, so they can be easily referenced during the proceedings and in the court record.

Before an exhibit can be considered by the judge or jury, it must be offered into evidence and accepted by the court. The opposing party has the opportunity to object to an exhibit's admission based on relevance, authenticity, hearsay, or other evidentiary grounds. Once admitted, the exhibit becomes part of the official record and can be considered by the factfinder in reaching a decision.

In small claims court, the exhibit process is usually much less formal, but organizing your documents as numbered or labeled exhibits with a brief index describing each one shows the judge you are prepared and makes it easier for them to follow your presentation. Bringing at least three copies of each exhibit, one for the judge, one for the opposing party, and one for yourself, is standard practice.`,
    relatedTerms: ["evidence", "admissibility", "discovery", "complaint"],
    category: "Court",
  },
  {
    term: "Warranty",
    slug: "warranty",
    shortDef: "A promise or guarantee about the quality, condition, or performance of a product or service, whether written or implied by law.",
    longDef: `A warranty is a promise about a product's quality, characteristics, or performance. Warranties can be express, meaning explicitly stated in writing or verbally by the seller, or implied, meaning automatically read into the transaction by law regardless of what the seller actually said, such as the implied warranty of merchantability that goods are fit for their ordinary purpose.

Warranties can also be full or limited: a full warranty requires the seller to fix or replace a defective product within a reasonable time at no cost, while a limited warranty may restrict coverage to parts only, require the consumer to pay for labor, or exclude certain types of damage. The Magnuson-Moss Warranty Act governs written warranties on consumer products and requires them to be clearly labeled and written in plain language.

When a product fails to perform as warranted, the first step is usually to review the specific written warranty terms, or rely on the implied warranty if there is no written warranty, and then send a demand letter to the seller or manufacturer describing the failure and requesting repair, replacement, or refund as appropriate.`,
    relatedTerms: ["implied-warranty", "express-warranty", "consumer-protection", "breach-of-contract"],
    category: "Consumer Rights",
  },
  {
    term: "Implied Warranty",
    slug: "implied-warranty",
    shortDef: "An unwritten, automatic legal guarantee that a product sold is fit for its ordinary intended purpose and free of hidden defects.",
    longDef: `An implied warranty is a guarantee that arises automatically by operation of law in most sales transactions, without needing to be explicitly stated by the seller. The most common form is the implied warranty of merchantability, which guarantees that goods sold by a merchant are fit for the ordinary purposes for which such goods are used, pass without objection in the trade, and conform to any promises made on the packaging or label.

Another common implied warranty is the warranty of fitness for a particular purpose, which applies when a seller knows the buyer intends to use the product for a specific purpose and the buyer is relying on the seller's expertise or advice in selecting the product. If the product fails to perform for that particular purpose, the seller may be liable even if the product works fine for its ordinary use.

Implied warranties can be disclaimed in some circumstances, most commonly through conspicuous language like as-is or with all faults, though a number of states restrict or prohibit such disclaimers, particularly for consumer goods and used cars sold by dealers.`,
    relatedTerms: ["warranty", "express-warranty", "lemon-law", "consumer-protection"],
    category: "Consumer Rights",
  },
  {
    term: "Express Warranty",
    slug: "express-warranty",
    shortDef: "A specific written or verbal promise by a seller about the quality, features, or performance of a product.",
    longDef: `An express warranty is a specific promise, affirmation, description, or sample provided by the seller that becomes part of the basis of the bargain between buyer and seller. Unlike implied warranties, which arise automatically by law, express warranties are created by the seller's own statements or representations about the product, whether made in writing, verbally, through advertising, or by showing a sample or model.

Express warranties do not require any specific words like warranty or guarantee to be created. A seller's statement that a roof will last 20 years, or that a used car has a clean title, can create an express warranty even if the seller did not intend it as a formal promise. However, general statements of opinion or puffery, such as this is the best mattress on the market, typically do not create express warranties.

When a product fails to meet an express warranty, the buyer can seek repair, replacement, or refund. A demand letter citing the specific express warranty language used by the seller, along with evidence of how the product failed to meet that promise, is often highly effective because it directly connects the seller's own words to the consumer's loss.`,
    relatedTerms: ["warranty", "implied-warranty", "breach-of-contract", "consumer-protection"],
    category: "Consumer Rights",
  },
  {
    term: "Lemon Law",
    slug: "lemon-law",
    shortDef: "State laws requiring manufacturers to replace or buy back new vehicles with persistent, unfixable defects.",
    longDef: `Lemon laws are state statutes that protect consumers who purchase or lease new vehicles with substantial defects that the manufacturer cannot fix after a reasonable number of repair attempts. Most lemon laws apply for a set period after purchase, often one to two years or a defined mileage limit, and require that the defect substantially impair the vehicle's use, value, or safety.

To qualify, a consumer typically needs to show the manufacturer's authorized dealer was given a reasonable number of attempts, often three or four, to fix the same problem, or that the vehicle was out of service for repairs for a cumulative period exceeding a set number of days, commonly 30. If the standard is met, the manufacturer must either replace the vehicle or refund the purchase price, minus a mileage offset for use before the first repair attempt.

Keeping detailed repair records, including dates, mileage, description of the problem, and repair order numbers, is essential to a successful lemon law claim. A well-documented demand letter to the manufacturer is often the required first step before pursuing arbitration or litigation under the state's lemon law.`,
    relatedTerms: ["warranty", "implied-warranty", "consumer-protection", "breach-of-contract"],
    category: "Consumer Rights",
  },
  {
    term: "Unfair Business Practices",
    slug: "unfair-business-practices",
    shortDef: "Business conduct that is deceptive, exploitative, or violates established standards of fair dealing with consumers.",
    longDef: `Unfair business practices is a broad term covering a wide range of conduct that violates general standards of honest dealing in the marketplace, including false advertising, price gouging, deceptive billing, unauthorized charges, and refusal to honor advertised terms. Most states prohibit this conduct through their consumer protection or unfair and deceptive acts and practices statutes.

What qualifies as unfair typically requires showing the practice caused, or was likely to cause, substantial harm to consumers that they could not reasonably have avoided, and that is not outweighed by any legitimate benefit to consumers or competition. Many states allow individual consumers to sue directly for violations and recover statutory damages, attorney fees, and sometimes treble damages.

Examples relevant to demand letters include gyms that make cancellation deliberately difficult, subscription services that charge after a supposedly canceled trial, or contractors who quote one price and bill another. Documenting the specific unfair practice, and any pattern of similar complaints against the business, strengthens a claim considerably.`,
    relatedTerms: ["deceptive-trade-practices", "consumer-protection", "warranty", "damages"],
    category: "Consumer Rights",
  },
  {
    term: "Deceptive Trade Practices",
    slug: "deceptive-trade-practices",
    shortDef: "Business conduct involving false representations, misleading statements, or omissions that deceive consumers in commercial transactions.",
    longDef: `Deceptive trade practices encompass business conduct that involves false, misleading, or deceptive acts or omissions in connection with the sale or advertisement of goods and services. Every state has laws prohibiting such conduct, often referred to as UDAP statutes, unfair and deceptive acts and practices laws, or consumer fraud statutes. These laws are designed to protect consumers from dishonest business behavior.

Common examples include advertising products with features they do not have, failing to disclose known defects, using bait-and-switch pricing tactics, making false claims about a product's origin or quality, and misrepresenting the terms of a warranty or return policy. The standard for proving deception typically requires showing that the business's representation, omission, or practice was likely to mislead a reasonable consumer in a material way.

Many state deceptive trade practices statutes provide powerful remedies including statutory minimum damages, treble or double damages, and mandatory attorney fee awards for successful plaintiffs. These enhanced remedies make deceptive trade practices claims particularly effective in demand letters because they significantly increase the other party's potential exposure beyond simple reimbursement.`,
    relatedTerms: ["unfair-business-practices", "consumer-protection", "damages", "warranty"],
    category: "Consumer Rights",
  },
  {
    term: "Consumer Protection",
    slug: "consumer-protection",
    shortDef: "The body of state and federal laws designed to safeguard buyers from unfair, deceptive, or fraudulent business practices.",
    longDef: `Consumer protection law encompasses a wide range of federal and state statutes designed to level the playing field between businesses and the individual consumers who buy their goods and services. At the federal level, agencies like the Federal Trade Commission and Consumer Financial Protection Bureau enforce rules against deceptive advertising, unfair billing, and predatory lending.

Every state also has its own consumer protection statute, often called a Little FTC Act or UDAP law, which typically allows individual consumers to sue directly for violations, sometimes recovering attorney fees and multiplied damages on top of their actual losses. These state laws cover a broad range of misconduct including false advertising, hidden fees, defective products, and failure to honor warranties or refund policies.

Citing the specific consumer protection statute that applies in your state can significantly strengthen a demand letter, since many of these laws include statutory penalties well beyond simple reimbursement, giving a business real incentive to resolve the dispute quickly rather than risk enhanced damages in court.`,
    relatedTerms: ["unfair-business-practices", "deceptive-trade-practices", "warranty", "damages"],
    category: "Consumer Rights",
  },
  {
    term: "Breach of Contract",
    slug: "breach-of-contract",
    shortDef: "The failure of one party to perform any duty or obligation specified in a legally binding agreement without legal excuse.",
    longDef: `A breach of contract occurs when one party fails, without legal excuse, to fulfill any of its obligations under a valid, enforceable agreement. This can include failing to deliver goods or services, paying late or not at all, or violating specific terms like confidentiality or exclusivity clauses. Breaches are typically categorized as either material or minor.

A material breach is a significant failure that undermines the core purpose of the contract, allowing the other party to treat the contract as terminated and sue for damages. A minor breach is a partial failure that does not excuse the other side from their own obligations but may still support a claim for damages.

When a breach occurs, the non-breaching party generally has a duty to mitigate their damages, meaning they must take reasonable steps to minimize their losses rather than letting them pile up. A demand letter is often the first formal step after a breach, putting the other party on notice and giving them a chance to cure the problem before litigation begins.`,
    relatedTerms: ["consideration", "specific-performance", "damages", "good-faith"],
    category: "Contract Law",
  },
  {
    term: "Uniform Commercial Code",
    slug: "ucc",
    shortDef: "A comprehensive set of standardized laws governing commercial transactions, including the sale of goods, adopted in all 50 states.",
    longDef: `The Uniform Commercial Code is a comprehensive body of law governing commercial transactions in the United States, adopted in some form by all 50 states and the District of Columbia. Its most relevant provisions for consumer disputes are found in Article 2, which covers the sale of goods, including implied warranties, remedies for breach, and rules about acceptance and rejection of non-conforming goods.

The UCC applies to transactions in goods, meaning tangible, movable items, rather than services or real estate. When a dispute involves a mix of goods and services, courts typically apply the predominant purpose test to determine whether the UCC or common law contract principles govern. The UCC provides default rules that fill gaps in agreements between parties, so even when a contract does not address a particular issue, the UCC may provide an answer.

For consumer disputes, the UCC is particularly important because it provides the legal foundation for implied warranty claims, sets rules for when a buyer can reject defective goods, and establishes the remedies available when a seller fails to deliver conforming merchandise.`,
    relatedTerms: ["breach-of-contract", "implied-warranty", "warranty", "good-faith"],
    category: "Contract Law",
  },
  {
    term: "Good Faith",
    slug: "good-faith",
    shortDef: "The implied legal duty requiring parties to a contract to act honestly and not undermine each other's reasonable expectations.",
    longDef: `Good faith, also referred to as the implied covenant of good faith and fair dealing, is a legal duty that exists automatically in virtually every contract, even if it is never written down. It requires each party to act honestly and to avoid actions that would deprive the other side of the benefits they reasonably expected from the agreement.

Violations of this duty can include deliberately withholding information needed to perform, manufacturing a pretext to avoid an obligation, exercising discretion granted under a contract in a way designed purely to harm the other party, or unreasonably delaying performance. This doctrine is frequently invoked in insurance disputes, where an insurer's unreasonable delay or denial of a valid claim can constitute bad faith.

Even when a contract's literal terms do not seem to have been violated, a pattern of dishonest or obstructive conduct by the other side may still support a claim for breach of the implied covenant of good faith. Documenting such conduct and mentioning it in a demand letter can add significant weight to your position.`,
    relatedTerms: ["bad-faith", "breach-of-contract", "consideration", "settlement"],
    category: "Contract Law",
  },
  {
    term: "Bad Faith",
    slug: "bad-faith",
    shortDef: "Intentionally dishonest, deceptive, or unfair conduct by a party to a contract or insurance agreement.",
    longDef: `Bad faith is the opposite of good faith and refers to conduct that is intentionally dishonest, deceptive, or designed to deprive another party of the benefits they are entitled to under an agreement. In contract law, bad faith can include deliberately sabotaging performance, using a contract provision in a way that contradicts the reasonable expectations of the parties, or manufacturing excuses to avoid obligations.

Bad faith is most commonly litigated in the insurance context, where it refers to an insurer's unreasonable denial, delay, or underpayment of a valid claim. Insurance bad faith can give rise to damages far beyond the value of the underlying claim, including emotional distress damages and punitive damages in many states, because of the special relationship of trust between insurers and policyholders.

Alleging bad faith in a demand letter can be a powerful tool because it signals to the recipient that their conduct, not just the underlying contractual obligation, is at issue. This can increase the stakes for the recipient and create additional incentive to settle, particularly in insurance disputes where bad faith exposure can dwarf the original claim amount.`,
    relatedTerms: ["good-faith", "breach-of-contract", "damages", "punitive-damages"],
    category: "Contract Law",
  },
  {
    term: "Specific Performance",
    slug: "specific-performance",
    shortDef: "A court order requiring a party to actually perform their contractual obligations rather than simply paying money damages.",
    longDef: `Specific performance is an equitable remedy where a court orders a breaching party to actually complete the action they agreed to do, rather than just pay monetary damages. Courts reserve this remedy for situations where money alone would not adequately compensate the injured party, most commonly in real estate transactions involving unique property or contracts involving one-of-a-kind goods.

Because specific performance is considered an extraordinary remedy, courts are far less willing to grant it for service contracts, as they generally will not force someone to perform personal services against their will, or in situations where monetary damages would work just as well. The party requesting specific performance must typically show that they are ready, willing, and able to perform their own obligations under the contract.

Most consumer and small business disputes are better suited to money damages rather than specific performance, but for unique situations, a rare antique, a one-of-a-kind property, a custom fabrication, it is worth knowing this remedy exists and can be requested in a demand letter or lawsuit.`,
    relatedTerms: ["breach-of-contract", "damages", "injunction", "consideration"],
    category: "Contract Law",
  },
  {
    term: "Consideration",
    slug: "consideration",
    shortDef: "Something of value exchanged between the parties to a contract that makes the agreement legally enforceable.",
    longDef: `Consideration is one of the essential building blocks of a valid contract: each party must give up something of value, whether that is money, goods, services, or a promise to do or not do something. Without consideration flowing both ways, an agreement is generally treated as an unenforceable gift promise rather than a binding contract.

Consideration does not need to be monetarily equal on both sides; courts generally will not second-guess whether a deal was a good one, only whether each party actually gave something up. Past consideration, something already given before the agreement was made, generally cannot support a new contract. A promise to do something you are already legally obligated to do also typically fails as consideration.

When disputing a contract or drafting a demand letter, it can help to point to the specific consideration you provided, whether payment made, services rendered, or deposit paid, since it establishes that a valid, binding agreement existed in the first place and gives the other party a clear obligation to fulfill their end.`,
    relatedTerms: ["breach-of-contract", "good-faith", "counteroffer", "promissory-estoppel"],
    category: "Contract Law",
  },
  {
    term: "Counteroffer",
    slug: "counteroffer",
    shortDef: "A response to an offer that changes the terms and operates as a rejection of the original offer while proposing a new one.",
    longDef: `A counteroffer is a response to an original offer that changes one or more terms, effectively rejecting the original offer and proposing a new one in its place. Under traditional contract law, a counteroffer terminates the original offer, meaning the original offeror is no longer bound by their initial proposal and the party who made the counteroffer cannot later go back and accept the original terms.

Counteroffers are a normal part of negotiation in business transactions, real estate deals, settlement discussions, and employment negotiations. Each counteroffer creates a new proposal that the other party can accept, reject, or counter again. A binding contract is formed only when one party makes an offer that the other accepts without modification.

Understanding counteroffers is important in settlement negotiations arising from demand letters. If you send a demand letter requesting $5,000 and the recipient responds offering $2,000, that is a counteroffer that you can accept, reject, or counter. Simply making a counteroffer does not lock either party into a deal unless and until both sides agree to the same terms.`,
    relatedTerms: ["consideration", "settlement", "settlement-agreement", "good-faith"],
    category: "Contract Law",
  },
  {
    term: "Promissory Estoppel",
    slug: "promissory-estoppel",
    shortDef: "A legal doctrine that enforces a promise even without a formal contract when the promisee reasonably relied on it to their detriment.",
    longDef: `Promissory estoppel is a legal doctrine that allows a court to enforce a promise even in the absence of a formal contract with consideration when it would be unjust not to do so. To invoke promissory estoppel, you generally must show that a clear and definite promise was made, that you reasonably relied on that promise, that your reliance led to a substantial and foreseeable detriment, and that enforcing the promise is necessary to prevent injustice.

This doctrine is commonly raised when someone acts on a verbal promise or informal assurance that does not meet all the technical requirements of a binding contract. For example, if an employer promises a job candidate that they will be employed for at least a year, the candidate quits their current job in reliance on that promise, and then the employer rescinds the offer, promissory estoppel might allow the candidate to recover damages despite the absence of a formal employment contract.

Promissory estoppel is a backup theory rather than a primary one. Courts generally prefer to enforce actual contracts, but when the elements of promissory estoppel are met, it can prevent parties from breaking promises that others have reasonably relied upon to their detriment.`,
    relatedTerms: ["consideration", "breach-of-contract", "unjust-enrichment", "damages"],
    category: "Contract Law",
  },
  {
    term: "Unjust Enrichment",
    slug: "unjust-enrichment",
    shortDef: "A legal claim that one party has unfairly benefited at another's expense without a legal justification and should pay for the benefit received.",
    longDef: `Unjust enrichment is a legal claim that allows a person to recover the value of a benefit they conferred on another party when it would be unfair for the recipient to retain that benefit without paying for it. Unlike breach of contract, unjust enrichment does not require a valid contract between the parties. Instead, it is based on the principle that no one should be unjustly enriched at another's expense.

To prove unjust enrichment, a claimant generally must show that they conferred a benefit on the defendant, that the defendant was aware of and accepted the benefit, and that it would be inequitable for the defendant to retain the benefit without compensating the claimant. Common examples include paying for improvements to someone else's property based on a later-failed agreement, performing work that was promised payment but never formalized in a contract, or overpaying due to a billing error.

Unjust enrichment is a particularly useful legal theory when there is no written contract to enforce or when a contract turns out to be unenforceable for technical reasons. Including it as an alternative cause of action in a demand letter can strengthen your position by providing an additional path to recovery.`,
    relatedTerms: ["quantum-meruit", "promissory-estoppel", "restitution", "breach-of-contract"],
    category: "Contract Law",
  },
  {
    term: "Quantum Meruit",
    slug: "quantum-meruit",
    shortDef: "A legal claim for the reasonable value of services rendered when there is no enforceable contract specifying payment.",
    longDef: `Quantum meruit, a Latin phrase meaning as much as is deserved, is a legal theory that allows a person to recover the reasonable value of services they provided to another party when there is no enforceable contract specifying compensation. It is closely related to unjust enrichment but focuses specifically on the value of services rendered rather than benefits conferred more broadly.

Quantum meruit claims commonly arise when work is performed under an oral agreement that does not specify a price, when a contract is unenforceable due to a technicality, when work exceeds the scope of an existing contract with the other party's knowledge and tacit approval, or when a contract is terminated before completion and the performing party seeks payment for work already done.

The recovery in a quantum meruit claim is typically measured by the reasonable market value of the services provided, not necessarily the price originally discussed or expected. Including quantum meruit as an alternative theory in a demand letter is particularly useful in contractor and freelancer disputes where the scope of work expanded beyond the original agreement or where a formal written contract was never executed.`,
    relatedTerms: ["unjust-enrichment", "breach-of-contract", "restitution", "consideration"],
    category: "Contract Law",
  },
  {
    term: "Class Action Waiver",
    slug: "class-action-waiver",
    shortDef: "A contractual provision requiring consumers to resolve disputes individually rather than joining or leading a class action lawsuit.",
    longDef: `A class action waiver is a provision commonly found in consumer contracts, terms of service, and employment agreements that requires the parties to resolve any disputes on an individual basis rather than as part of a class action lawsuit. These waivers are frequently paired with mandatory arbitration clauses, meaning disputes must be resolved through individual arbitration rather than collective legal action.

The Supreme Court has generally upheld class action waivers as enforceable under the Federal Arbitration Act, even when they effectively eliminate consumers' ability to pursue small-value claims that would only be economically viable as a group. However, some state courts have found class action waivers unenforceable in specific circumstances, particularly where the waiver would effectively prevent consumers from vindicating their statutory rights.

If your dispute involves a contract with a class action waiver, your options may be limited to individual arbitration or small claims court. Checking whether the waiver is enforceable under your state's law, and whether an existing class action has already been certified despite the waiver, is an important early step in your dispute strategy.`,
    relatedTerms: ["arbitration-clause", "class-action", "arbitration", "consumer-protection"],
    category: "Contract Law",
  },
  {
    term: "Arbitration Clause",
    slug: "arbitration-clause",
    shortDef: "A contract provision requiring the parties to resolve disputes through private arbitration instead of going to court.",
    longDef: `An arbitration clause is a provision in a contract that requires the parties to submit any disputes arising from the agreement to binding arbitration rather than filing a lawsuit in court. These clauses are extremely common in consumer contracts, employment agreements, financial services agreements, and terms of service for online platforms. They are generally enforceable under the Federal Arbitration Act.

Arbitration clauses vary in their terms. Some specify the arbitration provider, such as the American Arbitration Association or JAMS, the location of the arbitration, which party bears the costs, and whether the arbitrator's decision can be appealed. Many also include class action waivers preventing consumers from joining together to pursue shared claims.

Before sending a demand letter or filing a lawsuit, it is important to check whether the underlying contract contains an arbitration clause. If it does, the other party can likely compel arbitration and have any court case dismissed. However, some states provide exceptions for small claims court, meaning you may still be able to pursue your claim there regardless of the arbitration clause.`,
    relatedTerms: ["arbitration", "class-action-waiver", "breach-of-contract", "good-faith"],
    category: "Contract Law",
  },
  {
    term: "Force Majeure",
    slug: "force-majeure",
    shortDef: "A contract clause excusing performance when extraordinary events beyond either party's control make fulfillment impossible.",
    longDef: `Force majeure, meaning superior force, is a contract clause that excuses a party from performing its contractual obligations when an extraordinary, unforeseeable event, such as a natural disaster, war, pandemic, or government-ordered shutdown, makes performance impossible or impracticable. These clauses only apply as narrowly as their specific wording allows, and courts generally will not read broad excuses into a contract that does not explicitly include them.

A party invoking force majeure typically must show that the triggering event is specifically covered by the clause, that it actually prevented performance rather than just making it less convenient or profitable, and that they took reasonable steps to mitigate the impact. Many force majeure clauses also require the invoking party to provide prompt written notice to the other side.

If you receive a force majeure excuse from a vendor or contractor, it is worth checking the actual contract language closely. Many disputes arise when a business invokes force majeure for events that do not actually qualify, such as ordinary supply delays, staffing shortages, or cost increases that do not rise to the level of impossibility or impracticability.`,
    relatedTerms: ["breach-of-contract", "good-faith", "specific-performance", "damages"],
    category: "Contract Law",
  },
  {
    term: "Indemnification",
    slug: "indemnification",
    shortDef: "A contractual promise by one party to compensate the other for specific losses, damages, or legal costs that may arise.",
    longDef: `Indemnification clauses shift financial responsibility for certain losses from one contracting party to another. For example, a contractor might agree to indemnify a homeowner against any injury claims arising from work performed on the property, meaning the contractor or their insurer would cover those costs rather than the homeowner.

These clauses vary enormously in scope. Some cover only third-party claims, while others cover direct losses between the contracting parties themselves. Some include defense costs and attorney fees, while others are limited to damages paid. Courts scrutinize indemnification clauses closely, and some states limit or prohibit indemnification for a party's own negligence.

When a dispute arises and a contract contains an indemnification clause, it is worth reviewing exactly what losses are covered and whether the triggering conditions have been met before assuming the clause applies to your situation. An indemnification claim referenced in a demand letter can be a powerful tool, particularly when it shifts not only damages but also the cost of legal representation.`,
    relatedTerms: ["hold-harmless", "breach-of-contract", "liability", "damages"],
    category: "Contract Law",
  },
  {
    term: "Hold Harmless",
    slug: "hold-harmless",
    shortDef: "A contractual agreement where one party agrees not to hold the other responsible for certain risks, damages, or liabilities.",
    longDef: `A hold harmless clause, also called a hold harmless agreement, is a contractual provision in which one party agrees not to hold the other party legally responsible for certain risks, liabilities, or damages that may arise from the agreement or activity. Hold harmless clauses are often paired with indemnification provisions and are common in construction contracts, service agreements, event participation waivers, and lease agreements.

Hold harmless agreements can be unilateral, where only one party is protected, or mutual, where both parties agree to absorb their own risks. The enforceability of these clauses depends on factors including the clarity of the language, the relative bargaining power of the parties, whether the clause covers the specific type of harm at issue, and whether enforcing it would violate public policy.

Many states limit or void hold harmless clauses that attempt to shield a party from liability for their own gross negligence or intentional misconduct. If you signed a hold harmless agreement and later suffered harm, the clause may not be as absolute as it appears, and it is worth reviewing the specific language and your state's law before assuming you have no claim.`,
    relatedTerms: ["indemnification", "liability", "release-of-claims", "negligence"],
    category: "Contract Law",
  },
  {
    term: "Release of Claims",
    slug: "release-of-claims",
    shortDef: "A legal agreement in which one party gives up the right to pursue specific legal claims against another party.",
    longDef: `A release of claims is a legally binding agreement in which one party voluntarily relinquishes the right to pursue certain legal claims against another party. Releases are commonly included in settlement agreements, severance packages, personal injury settlements, and various types of waivers. Once signed, a valid release generally bars the releasing party from later suing on the released claims.

The scope of a release can vary dramatically. Some releases are narrow, covering only a specific incident or claim, while others are broad, releasing all claims of any kind that the releasing party may have against the other, whether known or unknown, at the time of signing. Because broad releases can extinguish claims the signer was not even aware of, they should be reviewed very carefully before signing.

Some states, notably California, have specific statutory protections regarding releases of unknown claims, requiring explicit waiver language before unknown claims can be released. If you are asked to sign a release as part of a settlement or severance, understanding exactly which claims you are giving up is one of the most important steps in the process.`,
    relatedTerms: ["settlement-agreement", "mutual-release", "settlement", "hold-harmless"],
    category: "Contract Law",
  },
  {
    term: "Mutual Release",
    slug: "mutual-release",
    shortDef: "An agreement where both parties simultaneously release each other from all claims arising from a dispute.",
    longDef: `A mutual release is an agreement in which both parties to a dispute simultaneously release each other from any and all claims they may have against one another arising from the disputed matter. Mutual releases are the most common form of settlement documentation because they provide finality for both sides, ensuring that neither party can come back later to assert additional claims related to the same dispute.

The mutual release typically specifies the scope of claims being released, the consideration being exchanged, usually a payment or other agreed-upon action, and any terms that survive the release, such as confidentiality obligations. Both parties should carefully review the scope to ensure they are comfortable releasing all covered claims.

Mutual releases are particularly valuable in complex disputes where both parties may have cross-claims against each other. By exchanging releases simultaneously, both sides achieve closure and can move forward without ongoing legal exposure. In many settlement negotiations initiated by a demand letter, the mutual release is the final document that formally resolves the matter.`,
    relatedTerms: ["release-of-claims", "settlement-agreement", "settlement", "consideration"],
    category: "Contract Law",
  },
  {
    term: "Damages",
    slug: "damages",
    shortDef: "The monetary compensation a court awards to a party who has been harmed by another's wrongful conduct or breach of obligation.",
    longDef: `Damages refers to the monetary compensation awarded by a court to a party who has suffered loss, injury, or harm due to another party's wrongful conduct, breach of contract, or violation of law. The fundamental purpose of damages in civil cases is to make the injured party whole, restoring them as closely as possible to the position they would have been in if the wrong had not occurred.

There are several categories of damages. Compensatory damages cover actual losses suffered, including both economic damages like medical bills, lost wages, and repair costs, and non-economic damages like pain and suffering. Punitive damages are awarded in some cases to punish particularly egregious conduct. Statutory damages are set by specific laws rather than based on actual loss. Nominal damages are small symbolic amounts awarded when a legal right was violated but no significant harm occurred.

When writing a demand letter, clearly itemizing your damages with supporting documentation, such as receipts, estimates, pay stubs, and medical records, makes your claim more credible and provides a concrete basis for the amount you are requesting.`,
    relatedTerms: ["compensatory-damages", "punitive-damages", "actual-damages", "restitution"],
    category: "Damages",
  },
  {
    term: "Compensatory Damages",
    slug: "compensatory-damages",
    shortDef: "Money awarded to reimburse a plaintiff for actual losses suffered, including both economic and non-economic harm.",
    longDef: `Compensatory damages are the most common type of damages awarded in civil cases, designed to compensate the injured party for actual losses they suffered as a direct result of the defendant's wrongful conduct. They are divided into two subcategories: economic damages, which cover quantifiable financial losses such as medical expenses, lost wages, property repair costs, and out-of-pocket expenses, and non-economic damages, which cover subjective harm such as pain and suffering, emotional distress, loss of enjoyment of life, and loss of consortium.

Economic damages are typically proven through documentation such as bills, receipts, pay stubs, and expert estimates. Non-economic damages are more subjective and often depend on the severity and duration of the plaintiff's suffering, the credibility of their testimony, and comparative verdicts in similar cases. Some states cap non-economic damages in certain types of cases, particularly medical malpractice.

In a demand letter, clearly separating and documenting your economic damages with supporting records, while describing the impact on your quality of life for non-economic damages, provides a comprehensive picture of your total harm and justifies the amount you are requesting.`,
    relatedTerms: ["damages", "actual-damages", "punitive-damages", "negligence"],
    category: "Damages",
  },
  {
    term: "Punitive Damages",
    slug: "punitive-damages",
    shortDef: "Extra damages awarded above compensation to punish the defendant for particularly outrageous or malicious conduct and deter future misconduct.",
    longDef: `Punitive damages, also called exemplary damages, are awarded in addition to compensatory damages to punish a defendant whose conduct was particularly egregious, malicious, fraudulent, or showed a reckless disregard for the rights or safety of others. Unlike compensatory damages, which aim to make the plaintiff whole, punitive damages are designed to punish the wrongdoer and deter similar conduct in the future.

Punitive damages are not available in every case. They typically require a showing of intentional misconduct, gross negligence, or fraud, and are not usually awarded for ordinary negligence or simple breach of contract. Many states impose caps on punitive damages, either as a fixed amount or as a ratio to compensatory damages. The Supreme Court has indicated that ratios exceeding roughly 9-to-1 relative to compensatory damages may raise due process concerns.

While punitive damages are relatively rare, the possibility of their award can significantly increase the stakes in a dispute. Mentioning the potential for punitive damages in a demand letter, when the defendant's conduct was truly egregious, can add leverage to settlement negotiations.`,
    relatedTerms: ["damages", "compensatory-damages", "treble-damages", "bad-faith"],
    category: "Damages",
  },
  {
    term: "Treble Damages",
    slug: "treble-damages",
    shortDef: "A statutory remedy that triples the amount of actual damages awarded, commonly available under consumer protection and antitrust laws.",
    longDef: `Treble damages are a statutory remedy that multiplies the plaintiff's actual damages by three. They are provided by specific federal and state statutes as an incentive for individuals to bring claims that serve the public interest and to impose a meaningful financial penalty on violators. Treble damages are commonly available under antitrust laws, RICO, certain consumer protection statutes, and some state deceptive trade practices laws.

Unlike punitive damages, which are awarded at the discretion of a judge or jury based on the egregiousness of the defendant's conduct, treble damages are mandated by statute when specific conditions are met. The statutory language typically specifies whether the trebling is automatic upon a finding of liability or whether it requires a showing of willful or knowing misconduct.

The availability of treble damages can dramatically increase the value of a claim. A demand letter that cites a statute providing for treble damages effectively tells the recipient that their $3,000 exposure could become $9,000 plus attorney fees, creating a strong incentive to settle before litigation. Checking whether your state's consumer protection law provides for treble damages is an important step in evaluating your claim.`,
    relatedTerms: ["damages", "punitive-damages", "compensatory-damages", "consumer-protection"],
    category: "Damages",
  },
  {
    term: "Liquidated Damages",
    slug: "liquidated-damages",
    shortDef: "A pre-agreed amount specified in a contract to be paid if one party breaches, serving as an estimate of anticipated harm.",
    longDef: `Liquidated damages clauses set a specific dollar figure in advance that will apply if a party breaches the contract, rather than requiring the injured party to prove their actual losses later. These clauses are common in construction contracts for late completion, leases for early termination, and event or vendor contracts for cancellation.

Courts will only enforce liquidated damages clauses if the amount was a reasonable estimate of likely harm at the time the contract was signed and the actual damages would be difficult to calculate precisely. A liquidated damages clause deemed punitive, meaning the amount is so disproportionate to any reasonable estimate of harm that it functions as a penalty, can be struck down entirely, leaving the injured party to prove actual damages instead.

If your contract includes a liquidated damages clause, citing it directly in a demand letter can simplify your claim considerably, since you will not need to separately prove the exact dollar value of your loss. The pre-agreed amount provides a clear, enforceable measure of damages that both parties accepted when they signed the contract.`,
    relatedTerms: ["damages", "breach-of-contract", "compensatory-damages", "consideration"],
    category: "Damages",
  },
  {
    term: "Actual Damages",
    slug: "actual-damages",
    shortDef: "The real, measurable financial losses a party suffered as a direct result of another's wrongful conduct.",
    longDef: `Actual damages, sometimes called general damages or direct damages, represent the real, quantifiable financial losses a party has suffered as a direct result of another's wrongful conduct or breach. They include out-of-pocket costs such as repair bills, replacement costs, medical expenses, lost wages, and other expenses that can be documented with receipts, invoices, and other records.

Actual damages are distinguished from other types of damages like punitive damages, which punish misconduct, statutory damages, which are set by law regardless of actual loss, and nominal damages, which acknowledge a legal violation without significant monetary harm. In most civil cases, the plaintiff must prove their actual damages with reasonable certainty, meaning they need evidence that establishes both the fact of the loss and its approximate dollar amount.

Documenting actual damages thoroughly is one of the most important steps in preparing a demand letter or court case. Keeping organized records of every expense, lost payment, and out-of-pocket cost related to the dispute, supported by receipts and written estimates, provides the foundation for a credible and persuasive claim.`,
    relatedTerms: ["damages", "compensatory-damages", "nominal-damages", "evidence"],
    category: "Damages",
  },
  {
    term: "Nominal Damages",
    slug: "nominal-damages",
    shortDef: "A small, symbolic monetary award recognizing that a legal right was violated even though no significant financial harm was proven.",
    longDef: `Nominal damages are a small, token monetary award, often one dollar, given by a court when a plaintiff has proven that their legal rights were violated but has not demonstrated any significant financial harm resulting from the violation. The award formally recognizes the wrong and establishes that the defendant acted improperly, even if the plaintiff suffered no measurable economic loss.

Nominal damages serve several important purposes. They establish a legal precedent that a violation occurred, which can be valuable in ongoing disputes. They may also serve as the basis for recovering attorney fees under fee-shifting statutes that award fees to the prevailing party. In some contexts, winning nominal damages establishes the plaintiff as the prevailing party, unlocking additional remedies.

While nominal damages themselves are financially insignificant, pursuing them can make sense when the principle of the matter is important, when the claim establishes useful legal rights for future disputes, or when the nominal damages award triggers a right to recover attorney fees that far exceed the token amount itself.`,
    relatedTerms: ["damages", "actual-damages", "compensatory-damages", "prevailing-party"],
    category: "Damages",
  },
  {
    term: "Restitution",
    slug: "restitution",
    shortDef: "A legal remedy requiring the wrongdoer to return money or property to restore the injured party to their original position.",
    longDef: `Restitution is a legal remedy that requires the party who has been unjustly enriched to return money, property, or the value of a benefit to the party from whom it was taken or received. Unlike compensatory damages, which measure the plaintiff's loss, restitution measures the defendant's gain, focusing on what the defendant received rather than what the plaintiff lost.

Restitution is commonly ordered in cases involving fraud, theft, breach of fiduciary duty, unjust enrichment, and rescission of contracts. It can also be ordered as part of a criminal sentence, requiring the defendant to repay victims for their losses. In the civil context, restitution aims to prevent the wrongdoer from profiting from their misconduct.

Restitution can be a more advantageous remedy than compensatory damages in some situations, particularly when the defendant's gain exceeds the plaintiff's measurable loss. For example, if someone is defrauded into selling property below market value, restitution based on the defendant's profit may exceed compensatory damages based on the plaintiff's out-of-pocket loss.`,
    relatedTerms: ["unjust-enrichment", "damages", "quantum-meruit", "compensatory-damages"],
    category: "Damages",
  },
  {
    term: "Fair Debt Collection Practices Act",
    slug: "fdcpa",
    shortDef: "A federal law prohibiting abusive, deceptive, and unfair practices by third-party debt collectors when collecting consumer debts.",
    longDef: `The Fair Debt Collection Practices Act is a federal law regulating how third-party debt collectors, though generally not original creditors collecting their own debts, may contact and pursue consumers. It prohibits harassment, such as repeated calls intended to annoy, threats of violence, or contacting a consumer at unreasonable hours, generally before 8 a.m. or after 9 p.m.

The FDCPA also bars collectors from making false or misleading representations, including misrepresenting the amount owed, falsely claiming to be an attorney or government official, or threatening legal action they do not actually intend to take. Collectors must honor a consumer's written request to stop contact, except to confirm they are ceasing collection or to notify of specific further actions.

Violations of the FDCPA can entitle consumers to statutory damages up to $1,000 per lawsuit, plus actual damages and attorney fees, making a well-documented demand letter citing specific violations a powerful tool for resolving harassment or getting a debt corrected. The FDCPA also requires collectors to validate debts upon request, giving consumers a right to demand proof that the amount and ownership of the debt are accurate.`,
    relatedTerms: ["consumer-protection", "damages", "statute-of-limitations", "garnishment"],
    category: "Federal Law",
  },
  {
    term: "Fair Credit Reporting Act",
    slug: "fcra",
    shortDef: "A federal law regulating how consumer credit information is collected, shared, and disputed to ensure accuracy and privacy.",
    longDef: `The Fair Credit Reporting Act is the primary federal law governing consumer credit reporting. It regulates how credit bureaus collect, maintain, and distribute consumer credit information and gives consumers specific rights to access, dispute, and correct inaccurate information on their credit reports. The three major credit bureaus, Equifax, Experian, and TransUnion, are all subject to the FCRA.

Under the FCRA, consumers have the right to a free annual credit report from each bureau, the right to dispute inaccurate or incomplete information, and the right to be notified when information in their credit file is used against them, such as in a denial of credit or employment. Credit bureaus must investigate disputes within 30 days and correct or delete inaccurate information. Businesses that furnish information to credit bureaus also have obligations to report accurately and investigate disputes forwarded to them.

Consumers can sue for violations of the FCRA, recovering actual damages for negligent violations and statutory damages of $100 to $1,000 per violation plus attorney fees for willful violations. A demand letter citing FCRA violations against a credit bureau or furnisher that has failed to correct inaccurate information can be particularly effective because of these statutory damage provisions.`,
    relatedTerms: ["consumer-protection", "fdcpa", "damages", "evidence"],
    category: "Federal Law",
  },
  {
    term: "Telephone Consumer Protection Act",
    slug: "tcpa",
    shortDef: "A federal law restricting unsolicited telemarketing calls, text messages, and faxes, with statutory damages for violations.",
    longDef: `The Telephone Consumer Protection Act is a federal law that restricts telemarketing calls, auto-dialed calls, pre-recorded or artificial voice messages, and unsolicited text messages and faxes. It requires telemarketers to maintain do-not-call lists, prohibits calls to numbers on the National Do Not Call Registry, and generally requires prior express consent before making automated or pre-recorded calls to cell phones.

The TCPA provides a private right of action with statutory damages of $500 per violation, which can be tripled to $1,500 per violation for knowing or willful violations. Because each unwanted call or text can constitute a separate violation, damages can accumulate rapidly. This makes TCPA claims among the most commonly filed consumer protection lawsuits.

If you are receiving unwanted robocalls, telemarketing calls, or automated text messages despite not having consented or after revoking your consent, documenting each instance with dates, times, phone numbers, and the content of the communication creates a strong foundation for a demand letter or TCPA lawsuit. Many TCPA cases settle for significant amounts due to the per-violation statutory damages.`,
    relatedTerms: ["consumer-protection", "damages", "fdcpa", "class-action"],
    category: "Federal Law",
  },
  {
    term: "Health Insurance Portability and Accountability Act",
    slug: "hipaa",
    shortDef: "A federal law protecting the privacy and security of individuals' health information held by healthcare providers and insurers.",
    longDef: `The Health Insurance Portability and Accountability Act is a federal law that establishes national standards for the protection of individually identifiable health information, commonly known as protected health information or PHI. HIPAA applies to covered entities, which include healthcare providers, health plans, and healthcare clearinghouses, as well as their business associates who handle PHI on their behalf.

HIPAA's Privacy Rule gives patients the right to access their own medical records, request corrections, receive an accounting of disclosures, and restrict certain uses of their information. The Security Rule requires covered entities to implement safeguards to protect electronic PHI. Violations can result in civil penalties ranging from $100 to $50,000 per violation, up to $1.5 million per year for repeated violations of the same provision, as well as criminal penalties for knowing violations.

It is important to note that HIPAA does not provide a private right of action, meaning individuals cannot directly sue for HIPAA violations. However, unauthorized disclosure of health information may support claims under state privacy laws, and the fact of a HIPAA violation can strengthen a demand letter or complaint in a related state-law privacy or negligence action.`,
    relatedTerms: ["consumer-protection", "fcra", "damages", "negligence"],
    category: "Federal Law",
  },
  {
    term: "Americans with Disabilities Act",
    slug: "ada",
    shortDef: "A federal civil rights law prohibiting discrimination against individuals with disabilities in employment, public services, and public accommodations.",
    longDef: `The Americans with Disabilities Act is a comprehensive federal civil rights law that prohibits discrimination against individuals with disabilities in several key areas of public life. Title I covers employment, requiring employers with 15 or more employees to provide reasonable accommodations and prohibiting discrimination in hiring, firing, promotion, and other terms of employment. Title II covers state and local government services and programs. Title III covers public accommodations, requiring businesses open to the public to be accessible to people with disabilities.

The ADA defines disability broadly as a physical or mental impairment that substantially limits one or more major life activities, a record of such impairment, or being regarded as having such an impairment. Reasonable accommodations in employment can include modified work schedules, job restructuring, accessible equipment, and policy modifications, as long as they do not impose an undue hardship on the employer.

Remedies for ADA violations include injunctive relief, compensatory damages, back pay in employment cases, and attorney fees. In employment cases, a charge must first be filed with the EEOC before a private lawsuit can be brought. In public accommodation cases, private plaintiffs can seek injunctive relief, and the Department of Justice can also pursue monetary damages.`,
    relatedTerms: ["consumer-protection", "damages", "retaliation", "hostile-work-environment"],
    category: "Federal Law",
  },
  {
    term: "Freedom of Information Act",
    slug: "foia",
    shortDef: "A federal law giving the public the right to request access to records and documents held by federal government agencies.",
    longDef: `The Freedom of Information Act is a federal law that gives any person the right to request access to records held by federal government agencies. Enacted in 1966, FOIA is based on the principle that the public has a right to know what its government is doing. Any person, including individuals, businesses, and organizations, can submit a FOIA request, and they do not need to provide a reason for requesting the records.

Federal agencies must respond to FOIA requests within 20 business days, though extensions are common for complex requests. Agencies can withhold information under nine specific exemptions, including national security, personal privacy, law enforcement investigations, trade secrets, and internal deliberative processes. When an agency withholds records, it must specify which exemption applies and the requestor can appeal the decision.

While FOIA applies only to federal agencies, every state has its own public records law, often called an open records act or sunshine law, that provides similar access to state and local government records. These laws can be useful tools when a dispute involves government agencies, regulated industries, or publicly funded programs.`,
    relatedTerms: ["consumer-protection", "evidence", "discovery", "ada"],
    category: "Federal Law",
  },
  {
    term: "California Consumer Privacy Act",
    slug: "ccpa",
    shortDef: "A California state law giving residents the right to know, delete, and opt out of the sale of their personal information collected by businesses.",
    longDef: `The California Consumer Privacy Act, as amended by the California Privacy Rights Act, is one of the most comprehensive consumer privacy laws in the United States. It gives California residents the right to know what personal information businesses collect about them, the right to delete that information, the right to opt out of the sale or sharing of their personal information, and the right to non-discrimination for exercising their privacy rights.

The CCPA applies to for-profit businesses that do business in California and meet certain thresholds, including annual gross revenues over $25 million, buying or selling the personal information of 100,000 or more consumers or households, or deriving 50 percent or more of annual revenue from selling or sharing personal information. The law covers a broad range of personal information including names, addresses, browsing history, purchase history, geolocation data, and biometric information.

The CCPA provides a limited private right of action specifically for data breaches resulting from a business's failure to implement reasonable security measures, with statutory damages ranging from $100 to $750 per consumer per incident. For other violations, enforcement is primarily through the California Attorney General and the newly established California Privacy Protection Agency.`,
    relatedTerms: ["consumer-protection", "hipaa", "fcra", "damages"],
    category: "Federal Law",
  },
  {
    term: "Wrongful Termination",
    slug: "wrongful-termination",
    shortDef: "The illegal firing of an employee in violation of law, public policy, or the terms of an employment contract.",
    longDef: `Wrongful termination occurs when an employer fires an employee for a reason that violates the law, an employment contract, or established public policy, even in an at-will employment state. Common categories include termination based on a protected characteristic such as race, sex, age, disability, or religion, retaliation for reporting illegal conduct or exercising a legal right, or termination that breaches an explicit or implied employment contract.

Most U.S. employees are considered at-will, meaning they can generally be fired for any reason or no reason at all, but not for an illegal one. Determining whether a termination was wrongful usually requires looking at the stated reason, comparing treatment of similarly situated employees, and examining the timing relative to any protected activity, since close timing between a complaint and a firing can itself be evidence of retaliation.

Before pursuing a wrongful termination claim, most employees must first file a charge with the EEOC or a state equivalent for discrimination claims within a strict deadline, often 180 to 300 days from the termination date, before they can sue in court. A demand letter to the former employer can be an effective first step, particularly when the facts strongly suggest illegal motivation.`,
    relatedTerms: ["at-will-employment", "retaliation", "hostile-work-environment", "severance"],
    category: "Employment",
  },
  {
    term: "Wage Theft",
    slug: "wage-theft",
    shortDef: "An employer's failure to pay workers the full wages they are legally owed, including overtime, minimum wage, and earned commissions.",
    longDef: `Wage theft occurs when an employer fails to pay an employee wages they are legally entitled to. Common forms include not paying overtime for hours worked beyond 40 in a week, paying less than minimum wage, requiring off-the-clock work, illegally deducting expenses from paychecks, misclassifying employees as independent contractors to avoid overtime and benefits, or simply not paying a final paycheck after termination.

The federal Fair Labor Standards Act sets baseline wage and overtime protections, and most states have their own wage laws that can provide even stronger protections, including specific deadlines for final paycheck delivery and penalties for late payment. Wage theft is one of the most widespread labor violations, affecting millions of workers across all industries.

Employees pursuing a wage theft claim should gather pay stubs, time records, and any employer communications about hours or pay before sending a demand letter. Many states allow recovery of not just unpaid wages but also liquidated damages, often doubling the amount owed, and attorney fees, which can substantially increase the value of a claim.`,
    relatedTerms: ["wrongful-termination", "at-will-employment", "damages", "retaliation"],
    category: "Employment",
  },
  {
    term: "Workers' Compensation",
    slug: "workers-compensation",
    shortDef: "A state-mandated insurance system providing benefits to employees who are injured or become ill due to their job.",
    longDef: `Workers' compensation is a state-mandated insurance program that provides medical benefits, wage replacement, and disability compensation to employees who suffer work-related injuries or illnesses, regardless of fault. In exchange for these guaranteed benefits, employees generally give up the right to sue their employer directly for workplace injuries, a tradeoff known as the workers' compensation bargain.

Benefits typically include coverage of all reasonable and necessary medical treatment related to the injury, temporary disability payments replacing a portion of lost wages during recovery, permanent disability benefits if the injury causes lasting impairment, and vocational rehabilitation services if the employee cannot return to their previous job. Death benefits are available to dependents of workers killed on the job.

Filing a workers' compensation claim requires prompt reporting of the injury to the employer, usually within a specific number of days. Employers are prohibited from retaliating against employees who file workers' compensation claims, and doing so may give rise to a separate wrongful termination claim. If a claim is denied or benefits are disputed, the employee can appeal through the state workers' compensation board or commission.`,
    relatedTerms: ["wrongful-termination", "retaliation", "at-will-employment", "damages"],
    category: "Employment",
  },
  {
    term: "Unemployment Insurance",
    slug: "unemployment-insurance",
    shortDef: "A joint federal-state program providing temporary income to workers who lose their jobs through no fault of their own.",
    longDef: `Unemployment insurance is a joint federal-state program that provides temporary financial assistance to workers who become unemployed through no fault of their own, such as through layoffs, company closures, or reductions in force. The program is funded primarily through employer payroll taxes and is administered by each state's unemployment agency under federal guidelines.

To qualify for unemployment benefits, a worker generally must have earned enough wages during a defined base period, be able and available to work, and be actively seeking new employment. Workers who are fired for willful misconduct or who voluntarily quit without good cause are typically disqualified, though the specific rules vary by state and each case is evaluated individually.

If an unemployment claim is denied, the worker has the right to appeal, usually through an administrative hearing where they can present evidence and testimony. Employers can also contest claims, but misrepresenting the circumstances of a termination to deny benefits may constitute a separate legal violation. Benefits typically last up to 26 weeks, though extensions may be available during periods of high unemployment.`,
    relatedTerms: ["wrongful-termination", "at-will-employment", "severance", "wage-theft"],
    category: "Employment",
  },
  {
    term: "At-Will Employment",
    slug: "at-will-employment",
    shortDef: "The default employment relationship in most U.S. states where either party can end the job at any time for any legal reason.",
    longDef: `At-will employment is the default legal presumption in nearly every U.S. state, with Montana being a notable exception after a probationary period. It means either the employer or the employee can end the working relationship at any time, for any reason, or no reason at all, and without advance notice, so long as the reason is not illegal.

Even within an at-will relationship, employers cannot fire someone for reasons that violate anti-discrimination law, retaliate against protected activity, breach an implied contract created through employee handbooks or verbal promises, or violate public policy such as firing someone for refusing to do something illegal or for serving jury duty.

Many employees mistakenly believe at-will status means they have no legal protection at all. In reality, it simply shifts the burden: the employee must show the termination falls into one of the recognized exceptions to at-will employment rather than assuming any firing without a stated reason is automatically wrongful. Understanding these exceptions is critical when evaluating a potential wrongful termination claim.`,
    relatedTerms: ["wrongful-termination", "retaliation", "severance", "hostile-work-environment"],
    category: "Employment",
  },
  {
    term: "Hostile Work Environment",
    slug: "hostile-work-environment",
    shortDef: "A workplace made intolerable by severe or pervasive harassment or discrimination based on a protected characteristic.",
    longDef: `A hostile work environment exists when unwelcome conduct based on a protected characteristic, such as race, sex, religion, national origin, age, or disability, is severe or pervasive enough to create a work environment that a reasonable person would consider intimidating, hostile, or abusive. This is a specific legal claim under anti-discrimination laws, not simply a generally unpleasant workplace.

Courts consider several factors in evaluating hostile work environment claims, including the frequency of the discriminatory conduct, its severity, whether it is physically threatening or humiliating versus merely an offensive utterance, and whether it unreasonably interferes with the employee's work performance. A single incident may be sufficient if it is extremely severe, such as a physical assault, but most claims involve a pattern of behavior over time.

Employees experiencing a hostile work environment should document each incident with dates, witnesses, and specific details, report the conduct through their employer's internal complaint procedures, and preserve any relevant communications. Filing an internal complaint creates a record and puts the employer on notice, which is important both for building a claim and for establishing potential employer liability.`,
    relatedTerms: ["sexual-harassment", "retaliation", "wrongful-termination", "at-will-employment"],
    category: "Employment",
  },
  {
    term: "Sexual Harassment",
    slug: "sexual-harassment",
    shortDef: "Unwelcome sexual conduct in the workplace that creates a hostile environment or conditions job benefits on submission to the conduct.",
    longDef: `Sexual harassment in the workplace generally falls into two legal categories. Quid pro quo harassment occurs when a job benefit such as hiring, promotion, or avoiding termination is conditioned on submitting to unwelcome sexual conduct. Hostile work environment harassment occurs when unwelcome sexual conduct, including comments, jokes, unwanted touching, or explicit materials, is severe or pervasive enough to alter the conditions of employment and create an abusive environment.

Employers can be held liable for harassment by supervisors, and in many cases for harassment by coworkers or even non-employees like clients if the employer knew or should have known about it and failed to take corrective action. Most states require employers of a certain size to provide a reporting mechanism, and employees are generally expected to use it, though a strong claim can still exist even without a formal internal complaint in egregious cases.

Documenting each incident with dates, witnesses, and direct quotes when possible, along with saving any relevant messages or emails, significantly strengthens both an internal complaint and any subsequent EEOC charge or demand letter. Time limits for filing are strict, so taking action promptly is important.`,
    relatedTerms: ["hostile-work-environment", "retaliation", "wrongful-termination", "damages"],
    category: "Employment",
  },
  {
    term: "Retaliation",
    slug: "retaliation",
    shortDef: "Adverse action taken by an employer against an employee for engaging in legally protected activity such as reporting misconduct.",
    longDef: `Retaliation occurs when an employer takes an adverse action, including termination, demotion, pay cut, negative reviews, or exclusion from projects, against an employee because they engaged in legally protected activity. Protected activity typically includes filing a discrimination or harassment complaint, participating in a workplace investigation, requesting a reasonable accommodation, reporting safety violations, or exercising rights like taking family medical leave.

Retaliation claims are among the most commonly filed employment claims, in part because they can succeed even when the underlying complaint, for example, the original discrimination claim, does not, as long as the employee had a reasonable good-faith belief that they were reporting something unlawful. Close timing between the protected activity and the adverse action is often key evidence of retaliatory intent.

Building a retaliation claim generally requires documenting the protected activity including the date and content of a complaint, the adverse action that followed, and the timeline connecting them, along with any shift in how the employee was treated after making the complaint. This documentation is essential for both a demand letter and any later EEOC filing or lawsuit.`,
    relatedTerms: ["wrongful-termination", "hostile-work-environment", "whistleblower", "sexual-harassment"],
    category: "Employment",
  },
  {
    term: "Whistleblower",
    slug: "whistleblower",
    shortDef: "An employee or insider who reports illegal activity, fraud, or safety violations within their organization to authorities or the public.",
    longDef: `A whistleblower is a person, typically an employee or insider, who reports illegal activity, fraud, safety violations, or other misconduct occurring within their organization to a government agency, law enforcement, or the public. Whistleblower protection laws at both the federal and state level shield these individuals from retaliation by their employers.

Protections exist under numerous federal statutes covering specific areas such as securities fraud through the SEC whistleblower program, workplace safety through OSHA, healthcare fraud, government contracting through the False Claims Act, and environmental violations. Many state laws provide broader general whistleblower protections as well. Some programs, particularly the SEC and False Claims Act qui tam provisions, offer financial rewards to whistleblowers whose reports lead to successful enforcement actions.

To qualify for protection, a whistleblower generally needs a good-faith, reasonable belief that the conduct they reported was actually illegal, even if they later turn out to have been mistaken. Employees considering making a report should understand which specific statute applies, since the protections, deadlines, and required reporting procedures vary significantly depending on the type of misconduct.`,
    relatedTerms: ["retaliation", "wrongful-termination", "hostile-work-environment", "at-will-employment"],
    category: "Employment",
  },
  {
    term: "Non-Compete Agreement",
    slug: "non-compete",
    shortDef: "A contract restricting an employee from working for a competitor or starting a competing business for a defined time and area after leaving.",
    longDef: `A non-compete agreement is a contract clause restricting a former employee from working for a competitor or starting a competing business within a defined geographic area and time period after leaving a job. Enforceability varies dramatically by state: some states, most notably California, generally void non-compete agreements entirely as against public policy, while others enforce them if the restrictions are reasonable in scope, duration, and geography.

The FTC has moved to restrict non-compete agreements nationally in recent years, and many states have passed laws limiting or banning them for lower-wage workers, even where they remain enforceable for higher-level employees. Courts evaluating enforceability typically consider whether the restriction protects a legitimate business interest, whether the time and geographic limits are reasonable, and whether the restriction imposes an undue hardship on the employee.

If you are bound by a non-compete and considering a new job or business, it is worth reviewing your specific state's law and the exact language of the agreement, since overly broad non-competes with unreasonable duration, unlimited geography, or overly broad restricted activities are often unenforceable even in states that generally allow them.`,
    relatedTerms: ["severance", "breach-of-contract", "at-will-employment", "injunction"],
    category: "Employment",
  },
  {
    term: "Severance",
    slug: "severance",
    shortDef: "Compensation and benefits offered to a departing employee, typically in exchange for signing a release of legal claims against the employer.",
    longDef: `Severance is compensation, usually a lump sum or continued salary payments, offered to an employee upon termination, typically in exchange for the employee agreeing to release the employer from potential legal claims. Severance is generally not legally required unless promised in an employment contract, offer letter, or established company policy, but many employers offer it as a standard practice, particularly during layoffs.

Severance packages often include continued salary payments calculated based on years of service, continuation of health insurance coverage, outplacement services, and sometimes accelerated vesting of stock options or other equity. The critical component is almost always a release of claims, in which the employee agrees not to sue the employer for wrongful termination, discrimination, or other potential claims.

Before signing a severance agreement, employees should carefully evaluate whether they may have legal claims worth more than the severance being offered. Federal law requires that employees age 40 and older be given at least 21 days to consider a severance agreement and 7 days to revoke after signing. Negotiating the terms of a severance package, either directly or through an attorney, is common and often results in improved terms.`,
    relatedTerms: ["wrongful-termination", "release-of-claims", "at-will-employment", "non-compete"],
    category: "Employment",
  },
  {
    term: "Security Deposit",
    slug: "security-deposit",
    shortDef: "Money paid by a tenant to a landlord at the start of a lease as protection against unpaid rent or property damage.",
    longDef: `A security deposit is a sum of money paid by a tenant to a landlord at the beginning of a tenancy, held as financial protection against unpaid rent, property damage beyond normal wear and tear, or other lease violations. Most states regulate security deposits, imposing limits on the maximum amount, usually one to two months' rent, and establishing specific requirements for how the deposit must be held and returned.

At the end of a tenancy, landlords are required to return the security deposit within a specific time frame set by state law, typically 14 to 30 days, along with an itemized statement of any deductions. Deductions must be for actual damages, not normal wear and tear, which refers to the natural deterioration that occurs through ordinary use of the property over time. Common disputes arise over the distinction between damage and normal wear and tear.

If a landlord fails to return a security deposit or makes improper deductions, tenants can often recover the deposit amount plus penalties, which may include double or triple the deposit amount plus attorney fees under many state laws. A demand letter documenting the lease dates, deposit amount, move-out condition, and applicable state law is typically the first step in recovering a wrongfully withheld security deposit.`,
    relatedTerms: ["damages", "breach-of-contract", "small-claims-court", "demand-letter"],
    category: "Housing",
  },
];

// Backward compatibility alias
export const GLOSSARY_TERMS = GLOSSARY;

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return GLOSSARY.find((t) => t.slug === slug);
}

export function getAllTermSlugs(): string[] {
  return GLOSSARY.map((t) => t.slug);
}

export function getAllCategories(): string[] {
  const categories = new Set<string>();
  for (const t of GLOSSARY) {
    categories.add(t.category);
  }
  return Array.from(categories);
}

export function getTermsByCategory(category: string): GlossaryTerm[] {
  return GLOSSARY.filter((t) => t.category === category);
}
