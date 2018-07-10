// This file is owned by Chris Giddy of TIS-DS-Hosting
// Last Updated: 18:30 PST july 06 2018 updated swiftnet.sipn.swift.com by chris giddy
// IMPORTANT NOTE: Please do not remove satuitcrm.com from this file
function FindProxyForURL(url, host)
{
   if (isPlainHostName(host))
      return "DIRECT";
   else if (shExpMatch(host,"www.blackrock.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"emergency.blackrock.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"estudio.blackrock.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"myapps.blackrock.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"cn.blackrock.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"www2.blackrock.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"www1.blackrock.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"app.aladdin.blackrock.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"marketing.blackrock.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"videos.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"www.bnyrcd.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (shExpMatch(host,"metric.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"smetric.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"metric.schwabinstitutional.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"smetric.schwabinstitutional.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"smetric.401kaccess.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"smetric.schwabintelligenttechnologies.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"smetric.schwabplan.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"metric.schwabplan.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"rpsmkto.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"scfmkto.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"rpsmktoqa.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"scfmktoqa.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"mkt-corporateservices.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"mktqa-corporateservices.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"mkt-qa.schwabcharitable.org"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"mkt.schwabcharitable.org"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"login.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"www.wsc.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (shExpMatch(host,"dale.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"webdam.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"perspective.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"perspectives.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"chivpn.optionsxpress.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"images.optionsxpress.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"jv.optionsxpress.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"marketing.optionsxpress.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"mobile-config.optionsxpress.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"mobile-dashboard.optionsxpress.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"mobilepilot.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"rtmp.optionsxpress.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"stats.optionsxpress.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"video.optionsxpress.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"vt.optionsxpress.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"external9.optionsxpress.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"blog.optionsxpress.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"edge.optionsxpress.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"info.email.optionsxpress.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"movpn.optionsxpress.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"www-uat.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"client-uat.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"cfenterprise.securefrs.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (shExpMatch(host,"cfenterprisewss.securefrs.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (shExpMatch(host,"helpdesk.innovestsystems.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (shExpMatch(host,"www.fisglobal.com"))
     return "PROXY offprox.schwab.com:8080";
   else if (dnsDomainIs(host,"insights.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"adobe.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (dnsDomainIs(host,"pages-advisorservices-pce.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"phish.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"prod5.gtreasury.net"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (dnsDomainIs(host,"mail1.hc.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"recon-unifiedwealth-pn-prod.fiservapps.com"))
     return "DIRECT";
   else if (shExpMatch(host,"mosearch.oxweb.com"))
     return "DIRECT";
   else if (shExpMatch(host,"dasearch.oxweb.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"ox.corp.optionsxpress.com"))
     return "DIRECT";
   else if (shExpMatch(host,"sdsadmin.documentmailbox.com"))
     return "DIRECT";
   else if (shExpMatch(host,"stage.compliance11.com"))
     return "DIRECT";
   else if (shExpMatch(host,"preprod.compliance11.com"))
     return "DIRECT";
   else if (shExpMatch(host,"ondemand.compliance11.com"))
     return "DIRECT";
   else if (shExpMatch(host,"fisprotects-fsvbd1.fisglobal.com"))
     return "DIRECT";
   else if (shExpMatch(host,"pinpoint.ubs.com"))
     return "DIRECT";
   else if (shExpMatch(host,"app.somos.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"slbia.loanet.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"slbib.loanet.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"slbic.loanet.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"schwab2.loanet.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"slb15a2.loanet.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"slb17b.loanet.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"slb17c.loanet.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"slb17a.loanet.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"slb15c2.loanet.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"sra07a.loanet.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"sra07b.loanet.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"sra07c.loanet.com"))
     return "DIRECT";
   else if (shExpMatch(host,"network.loanet.net"))
     return "DIRECT";
   else if (shExpMatch(host,"clienttest.network.loanet.net"))
     return "DIRECT";
   else if (shExpMatch(host,"dr.network.loanet.net"))
     return "DIRECT";
   else if (dnsDomainIs(host,"ssf-sal-s307.loanet.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"ssf-hop-s307.loanet.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"ssf-hop-ua-s307.loanet.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,".aquaticbath401k.com"))
     return "DIRECT";
   else if (shExpMatch(host,"sch-cbaadm.scivantage.broadridge.com"))
     return "DIRECT";
   else if (shExpMatch(host,"sch.admin.maxit.uat.scivantage.broadridge.com"))
     return "DIRECT";
   else if (shExpMatch(host,"schnxsv001.schwab.blackrock.com"))
     return "DIRECT";
   else if (shExpMatch(host,"schnxsv002.schwab.blackrock.com"))
     return "DIRECT";
   else if (shExpMatch(host,"schnxsv003.schwab.blackrock.com"))
     return "DIRECT";
   else if (shExpMatch(host,"schnrax001.schwab.blackrock.com"))
     return "DIRECT";
   else if (shExpMatch(host,"schnrax002.schwab.blackrock.com"))
     return "DIRECT";
   else if (shExpMatch(host,"schnrax003.schwab.blackrock.com"))
     return "DIRECT";
   else if (shExpMatch(host,"schyxsv001.schwab.blackrock.com"))
     return "DIRECT";
   else if (shExpMatch(host,"schyxsv002.schwab.blackrock.com"))
     return "DIRECT";
   else if (shExpMatch(host,"schyxsv003.schwab.blackrock.com"))
     return "DIRECT";
   else if (shExpMatch(host,"schyrax001.schwab.blackrock.com"))
     return "DIRECT";
   else if (shExpMatch(host,"schyrax002.schwab.blackrock.com"))
     return "DIRECT";
   else if (shExpMatch(host,"schyrax003.schwab.blackrock.com"))
     return "DIRECT";
   else if (shExpMatch(host,"schcxsv001.schwab.blackrock.com"))
     return "DIRECT";
   else if (shExpMatch(host,"schcxsv002.schwab.blackrock.com"))
     return "DIRECT";
   else if (shExpMatch(host,"schcrax001.schwab.blackrock.com"))
     return "DIRECT";
   else if (shExpMatch(host,"schcrax002.schwab.blackrock.com"))
     return "DIRECT";
   else if (shExpMatch(host,"tdapp.lightning.sscgateway.com"))
     return "DIRECT";
   else if (shExpMatch(host,"tdapps.lightning.sscgateway.com"))
     return "DIRECT";
   else if (shExpMatch(host,"tddata.lightning.sscgateway.com"))
     return "DIRECT";
   else if (shExpMatch(host,"tddatas.lightning.sscgateway.com"))
     return "DIRECT";
   else if (shExpMatch(host,"tddatad.lightning.sscgateway.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"vdi.optionsxpress.com"))
     return "DIRECT";
   else if (shExpMatch(host,"altserve.dstcorp.net"))
     return "DIRECT";
   else if (shExpMatch(host,"dstcustomercenter.dstcorp.net"))
     return "DIRECT";
   else if (dnsDomainIs(host,"dstcorp.net"))
     return "DIRECT";
   else if (dnsDomainIs(host,"portfoliocenterhosted.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"cshosted.corp"))
     return "DIRECT";
   else if (dnsDomainIs(host,"schwabcharitable.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"schwabcharitable.org"))
     return "DIRECT";
   else if (dnsDomainIs(host,"schwabcharitable.net"))
     return "DIRECT";
   else if (shExpMatch(host,"portal.qlcentral.com"))
     return "DIRECT";
   else if (shExpMatch(host,"bdc-test-cnj-206.bnymellon.com"))
     return "DIRECT";
   else if (shExpMatch(host,"bdc-tpc-206.bnymellon.com"))
     return "DIRECT";
   else if (shExpMatch(host,"bdc-cnj-206.bnymellon.com"))
     return "DIRECT";
   else if (shExpMatch(host,"bts.qa.bnymellon.com"))
     return "DIRECT";
   else if (shExpMatch(host,"bts.bnymellon.com"))
     return "DIRECT";
   else if (shExpMatch(host,"cwicust.bnymellon.com"))
     return "DIRECT";
   else if (shExpMatch(host,"csg15001.mellon.com"))
     return "DIRECT";
   else if (shExpMatch(host,"glossqa.broadridge.com"))
     return "DIRECT";
   else if (shExpMatch(host,"gloss.broadridge.com"))
     return "DIRECT";
   else if (shExpMatch(host,"ascendisqa2.spsnet.broadridge.com"))
     return "DIRECT";
   else if (shExpMatch(host,"ascendis.spsnet.broadridge.com"))
     return "DIRECT";
   else if (shExpMatch(host,"web3.spsnet.broadridge.com"))
     return "DIRECT";
   else if (shExpMatch(host,"secureqa.spsnet.broadridge.com"))
     return "DIRECT";
   else if (shExpMatch(host,"secure.spsnet.broadridge.com"))
     return "DIRECT";
   else if (shExpMatch(host,"web3qa.spsnet.broadridge.com"))
     return "DIRECT";
   else if (shExpMatch(host,"wiisp1.bsgnet.adp.com"))
     return "DIRECT";
   else if (shExpMatch(host,"wiisp1.bsgint.adp.com"))
     return "DIRECT";
   else if (shExpMatch(host,"www-pce.csimfunds.com"))
     return "DIRECT";
   else if (shExpMatch(host,"www-pre.csimfunds.com"))
     return "DIRECT";
   else if (shExpMatch(host,"www-qa.csimfunds.com"))
     return "DIRECT";
   else if (shExpMatch(host,"www-uat.csimfunds.com"))
     return "DIRECT";
   else if (shExpMatch(host,"hc-ic360f34.datacenterinc.com"))
     return "DIRECT";
   else if (shExpMatch(host,"icore360.datacenterinc.com"))
     return "DIRECT";
   else if (shExpMatch(host,"schwabmbl-dev.imanage.work"))
     return "DIRECT";
   else if (shExpMatch(host,"schwabmbl.imanage.work"))
     return "DIRECT";
   else if (shExpMatch(host,"eum.hiperos.com"))
     return "DIRECT";
   else if (shExpMatch(host,"rportal.hiperos.com"))
     return "DIRECT";
   else if (shExpMatch(host,"srn.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"csimmktoqa.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"csimmkto.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"ia-pp.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"lms-pp.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"lms.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"lms-mgmt-preprod.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"lms-mgmt.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"lms-auth-preprod.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"lms-auth.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"login-pp.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"pages.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"lms.schwabplan.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"lms-qa.schwabplan.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"lms-dev.schwabplan.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"sia-client-planning-scheduling-psv-pp.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"sia-client-planning-psv-pp.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"ia.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"sia-client-planning-scheduling-psv.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"sia-client-planning-psv.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"moneyguidepro-pp.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"moneyguidepro.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"streetsmartedge-pc.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"asmkto.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"acquia.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"asmktoqa.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"asmktodev.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"www-qa.schwabfunds.com"))
     return "DIRECT";
   else if (shExpMatch(host,"www-uat.schwabfunds.com"))
     return "DIRECT";
   else if (shExpMatch(host,"www-pce.schwabfunds.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"pages-advisorservices.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"educationevents.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"pfpc2bny.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"cloudfront.net"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (dnsDomainIs(host,"cybersource.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (shExpMatch(host,"r-fmswcma.on24.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (shExpMatch(host,"r-fmswcmb.on24.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (dnsDomainIs(host,"exhibitforce.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (dnsDomainIs(host,"event.schwab.com"))
      return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"tdasp5m.rtsintranet.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"schwabdifference.com"))
                return "DIRECT";
   else if (dnsDomainIs(host,"apple401k.com"))
                return "DIRECT";
   else if (dnsDomainIs(host,"schwabgolf.com"))
                return "DIRECT";
   else if (dnsDomainIs(host,"schwabfilms.com"))
                return "DIRECT";
   else if (dnsDomainIs(host,"r310a.loanet.com"))
                return "DIRECT";
   else if (dnsDomainIs(host,"r310b.loanet.com"))
                return "DIRECT";
   else if (dnsDomainIs(host,"r310.loanet.com"))
                return "DIRECT";
   else if (dnsDomainIs(host,"on24local.com"))
                return "DIRECT";
   else if (shExpMatch(host,"tdasp1m.rtsintranet.com"))
     return "DIRECT";
   else if (shExpMatch(host,"tdasp3m.rtsintranet.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"schwabretirementcenter.com"))
                return "DIRECT";
   else if (dnsDomainIs(host,"ms.crd.com"))
                return "DIRECT";
   else if (dnsDomainIs(host,"blackrock.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"goindependent.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"lexisnexis.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (dnsDomainIs(host,"www.tradeaqs.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (dnsDomainIs(host,"ilinc.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (dnsDomainIs(host,"the401k.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"schwabmacentral.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"cdn.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"rpsspsadvisoryboard.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"ugc.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"miq.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"lmc.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"lmc-test.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"supportftp.ca.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"reviews.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"workshops.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"www.workshops.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"oninvesting.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"fal.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"supportftp.ca.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"reviews.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"p3uiw.sungard.com"))
     return "DIRECT";
   else if (shExpMatch(host,"p3ui.sungard.com"))
     return "DIRECT";
   else if (shExpMatch(host,"p3uiuat.sungard.com"))
     return "DIRECT";
   else if (shExpMatch(host,"feedback.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"workshops.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"www.workshops.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"oninvesting.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"fal.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"schwabexclusive.com"))
     return "DIRECT";
   else if (shExpMatch(host,"167.188.69.65"))
     return "DIRECT";
   else if (shExpMatch(host,"net2.lenos.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"schwabat.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"windwardinv.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"schwabimg.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,".schwabat.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"streetsmart.com"))
     return "DIRECT";
   else if (host == "rtapplet.schwabtrader.com")
     return "PROXY proxy.schwab.com:8080";
   else if (host == "feeds.schwab.com")
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,".cybertrader.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"schwab.co.uk"))
     return "DIRECT";
   else if (dnsDomainIs(host,".eschwab.com"))
     return "DIRECT";
   else if (host.indexOf("172.20.") == 0)
     return "DIRECT";
   else if (host.indexOf("204.130.59.") == 0)
     return "DIRECT";
   else if (host.indexOf("172.16.254.") == 0)
     return "DIRECT";
   else if (host.indexOf("172.16.255.") == 0)
     return "DIRECT";
   else if (host.indexOf("170.209.0.2") == 0)
     return "DIRECT";
   else if (host.indexOf("170.209.0.3") == 0)
     return "DIRECT";
   else if (host.indexOf("172.32.40.") == 0)
     return "DIRECT";
   else if (host.indexOf("12.148.178.") == 0)
     return "DIRECT";
   else if (shExpMatch(host,"metq1.schwab.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"q1.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"www.advantageprogram.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"cisknowledgebase.checkfreeinvsvcs.com"))
     return "DIRECT";
   else if (shExpMatch(host,"www.advisorport.com"))
     return "DIRECT";
   else if (shExpMatch(host,"secureqa.spsnet.broadridge.com"))
     return "DIRECT";
   else if (shExpMatch(host,"web3qa.spsnet.broadridge.com"))
     return "DIRECT";
   else if (shExpMatch(host,"atscert.visadpsmain.com"))
     return "DIRECT";
   else if (shExpMatch(host,"certfed.visadpsmain.com"))
     return "DIRECT";
   else if (shExpMatch(host,"prodfalcon6web.visaonline.com"))
     return "DIRECT";
   else if (shExpMatch(host,"certfalcon6web.visaonline.com"))
     return "DIRECT";
   else if (shExpMatch(host,"connect.phhpartners.com"))
     return "DIRECT";
   else if (shExpMatch(host,"schwab-sendsuite.pb.com"))
     return "DIRECT";
   else if (shExpMatch(host,"ssttest-sendsuite.test.pb.com"))
     return "DIRECT";
   else if (shExpMatch(host,"sr3.schwabrt.com"))
     return "DIRECT";
   else if (shExpMatch(host,"slapi15a.loanet.com"))
     return "DIRECT";
   else if (shExpMatch(host,"slapi15b.loanet.com"))
     return "DIRECT";
   else if (shExpMatch(host,"slapi15c.loanet.com"))
     return "DIRECT";
   else if (shExpMatch(host,"slb15a.loanet.com"))
     return "DIRECT";
   else if (shExpMatch(host,"slb15b.loanet.com"))
     return "DIRECT";
   else if (shExpMatch(host,"slb15c.loanet.com"))
     return "DIRECT";
   else if (shExpMatch(host,"connectgw.phhpartners.com"))
     return "DIRECT";
   else if (shExpMatch(host,"sbconnectgw.phhpartners.com"))
     return "DIRECT";
   else if (shExpMatch(host,"schwab.rdc.irv.goremote.com"))
     return "DIRECT";
   else if (shExpMatch(host,"chsw.rdc.ipass.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"schwabrt.com"))
     return "DIRECT";
   else if (shExpMatch(host,"asp.schwabrt.com"))
     return "DIRECT";
   else if (shExpMatch(host,"gateway.loanspandirect.com"))
     return "DIRECT";
   else if (shExpMatch(host,"remote.schwabrt.com"))
     return "DIRECT";
   else if (shExpMatch(host,"dstcustomercenter.dstcorp.net"))
     return "DIRECT";
   else if (shExpMatch(host,"csg.schwabrt.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"cstcfunds.com"))
     return "DIRECT";
   else if (shExpMatch(host,"www.schwabpcra.com"))
     return "DIRECT";
   else if (shExpMatch(host,"schwabretirementfunds.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"silverline401k.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"tomkinsretirement.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"401kaccess.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"fiduciaryseries.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"fiduciarydirect.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"schwapple401kabmacentral.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"andersen401k.com"))
     return "DIRECT";
   else if (shExpMatch(host,"www.banktrust.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"fundamentalindex.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"content.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"solutions.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"www.chicago.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"chicago.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"sanfrancisco.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"www.sanfrancisco.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"www.houston.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"houston.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"www.seattle.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"seattle.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"stories.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"familyoffice.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"franchise.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"franchise-dev.dev.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"franchise-uat.dev.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"mkt-franchise.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"mktqa-franchise.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"atcommunity.schwab.com"))
     return "DIRECT";
   else if (shExpMatch(host,"schwabhc.hire.com"))
     return "DIRECT";
   else if (shExpMatch(host,"rdc.schwabrt.com"))
     return "DIRECT";
   else if (shExpMatch(host,"asptest.schwabrt.com"))
     return "DIRECT";
   else if (shExpMatch(host,"ld.congress.gov"))
     return "DIRECT";
   else if (shExpMatch(host,"proactivep01.broadridge.com"))
     return "DIRECT";
   else if (shExpMatch(host,"proactiveq01.broadridge.com"))
     return "DIRECT";
   else if (shExpMatch(host,"proactiveqa.broadridge.com"))
     return "DIRECT";
   else if (shExpMatch(host,"proactive.broadridge.com"))
     return "DIRECT";
   else if (shExpMatch(host,"www.schwabct.com"))
     return "DIRECT";
   else if (shExpMatch(host,"stage.schwabct.com"))
     return "DIRECT";
   else if (shExpMatch(host,"poc.schwabct.com"))
     return "DIRECT";
   else if (shExpMatch(host,"client.schwabct.com"))
     return "DIRECT";
   else if (shExpMatch(host,"my.statestreet.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (shExpMatch(host,"app.socialware.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (shExpMatch(host,"intelligent-pre.schwab.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (shExpMatch(host,"feedback2.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"intelligent.schwab.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (shExpMatch(host,"www.intelligent.schwab.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (shExpMatch(host,"intelligent-asadmin-vnext.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"intelligent-vnext.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"intelligent-client-preprod.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"intelligent-client.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"hg-asadmin-pvs.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"hg-asadmin-dev.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"hg-asadmin-uat.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"hg-asadmin-qa.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"hg-asadmin-pre.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"hg-asadmin.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"fastlink.dev.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"finapp.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"edit.boxlocalhost.com"))
     return "DIRECT";
   else if (shExpMatch(host,"intelligent-asadmin.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"intelligent-asadmin-pre.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"institutionalintelligent.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"institutionalintelligent-pre.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"institutionalintelligent-dev.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"institutionalintelligent-qa.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"institutionalintelligent-uat.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"institutionalintelligent-vnext.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"hg-dev.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"hg-qa.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"hg-uat.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"hg-pre.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"hg.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"enroll.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"enroll-pp.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"enroll-pre.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"web01.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"whatsnew.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,".webex.com"))
     return "PROXY webexprox.schwab.com:8080";
   else if (dnsDomainIs(host,"ciscospark.com"))
     return "PROXY webexprox.schwab.com:8080";
   else if (dnsDomainIs(host,"ciscowebex.com"))
     return "PROXY webexprox.schwab.com:8080";
   else if (dnsDomainIs(host,"wbx2.com"))
     return "PROXY webexprox.schwab.com:8080";
   else if (dnsDomainIs(host,"webexconnect.com"))
     return "PROXY webexprox.schwab.com:8080";
   else if (dnsDomainIs(host,"staging.advantageprogram.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"advantageprogram.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"search.namequery.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,".services.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,".sponsorships2007.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"swiftnet.sipn.swift.com"))
     return "PROXY napd472cdc.cdc.schwab.com:48600";
   else if (dnsDomainIs(host,"post.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"web01.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"whatsnew.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"staging.advantageprogram.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"advantageprogram.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"search.namequery.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,".services.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,".sponsorships2007.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"post.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"asp11.centra.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (dnsDomainIs(host,"timetrade.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (dnsDomainIs(host,"nyxdata.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (dnsDomainIs(host,"nyx.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (dnsDomainIs(host,"latencystats.com"))
     return "PROXY fixproxy.schwab.com:8080";
   else if (dnsDomainIs(host,"etelligentconsulting.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"myocc2.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"tpasource.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,".schwabinsurance.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"schwab.blackrock.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,".transunionnetaccess.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"170.201.88.53"))
     return "DIRECT";
   else if (dnsDomainIs(host,"192.108.247.22"))
     return "DIRECT";
   else if (dnsDomainIs(host,".charlesschwabcorp.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,".pwcinternal.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,".micorp.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"bic.metavante.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,".metavante.org"))
     return "DIRECT";
   else if (host.indexOf("172.17.3.") == 0)
     return "DIRECT";
   else if (dnsDomainIs(host,".cyberdevs.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,".schwabmfinfo.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"www.charlesschwab.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"www.schwaballiance.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"l000.adiclient.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"visadpsmain.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,".schwabon.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,".fhlbny.biz"))
     return "DIRECT";
   else if (dnsDomainIs(host,"csg3.ubspw.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"csg4.ubspw.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"WWW.GRAGLOBAL.COM"))
     return "DIRECT";
   else if (dnsDomainIs(host,"PROD1.GRAGLOBAL.COM"))
     return "DIRECT";
   else if (dnsDomainIs(host,"EZLOCATE.NA.TELEATLAS.COM"))
     return "DIRECT";
   else if (dnsDomainIs(host,"schwab-cocoon.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"emailimages.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"www.schwabbank.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"schwabinsights.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"online.schwabbank.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,".schwabbank.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"schwabbankfunds.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"ftp.ca.com"))
     return "DIRECT";
   else if (shExpMatch(host,"community.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"scftpd.ca.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"data.wsc.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,".ept.scm"))
     return "DIRECT";
   else if (dnsDomainIs(host,"iar.arccorp.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"salesdemo.sanchez.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,".statestr.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"161.194.6.48"))
     return "DIRECT";
   else if (dnsDomainIs(host,".bisys.com"))
     return "PROXY soxprox.schwab.com:8080";
   else if (shExpMatch(host,"hbds.hitbox.com"))
     return "PROXY soxprox.schwab.com:8080";
   else if (shExpMatch(host,"schwab.thepsc.com"))
     return "PROXY soxprox.schwab.com:8080";
   else if (dnsDomainIs(host,"securities.citidirect.com"))
     return "PROXY soxprox.schwab.com:8080";
   else if (dnsDomainIs(host,".arccorp.com"))
     return "PROXY soxprox.schwab.com:8080";
   else if (dnsDomainIs(host,".satuitcrm.com"))
     return "PROXY soxprox.schwab.com:8080";
   else if (dnsDomainIs(host,".schwabbankmortgage.com"))
     return "PROXY soxprox.schwab.com:8080";
   else if (dnsDomainIs(host,".speedpay.com"))
     return "PROXY soxprox.schwab.com:8080";
   else if (dnsDomainIs(host,"schwab.digitalsafe.net"))
     return "PROXY soxprox.schwab.com:8080";
   else if (dnsDomainIs(host,"schwab4-v5.marketshare.com"))
     return "PROXY soxprox.schwab.com:8080";
   else if (dnsDomainIs(host,"optv5prod-reports.marketshare.com"))
     return "PROXY soxprox.schwab.com:8080";
   else if (dnsDomainIs(host,".schwab-global.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"www.schwabplan.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"schwabplan.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,".schwab.com.hk"))
     return "DIRECT";
   else if (dnsDomainIs(host,"broker.desktopstreaming.com"))
                return "PROXY soxprox.schwab.com:8000";
   else if (dnsDomainIs(host,"wt.schwabinstitutional.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"email.schwabinstitutional.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"annuity.schwabinstitutional.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,".schwabinstitutional.com"))
     return "DIRECT";
   else if (dnsDomainIs(host,"impactawards.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"impact.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,".cwconnect.com"))
                return "PROXY soxprox.schwab.com:8080";
   else if (dnsDomainIs(host,".efunds.com"))
                return "PROXY soxprox.schwab.com:8080";
   else if (dnsDomainIs(host,"schwab-cocoon.com"))
                return "PROXY soxprox.schwab.com:8080";
   else if (dnsDomainIs(host,"live.lehman.com"))
		return "PROXY soxprox.schwab.com:8080";
   else if (dnsDomainIs(host,"internaljobs.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"www.callancollege.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,".email.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,".explore.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"annuity.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"jobs.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"jobsearch.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"billpay.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"paybills.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"paybillstest.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,".web.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"emailservices.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"my.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"quicken.schwab.com"))
                return "DIRECT";
   else if (dnsDomainIs(host,".schwabretirement.com"))
                return "DIRECT";
   else if (dnsDomainIs(host,".schwabwomen.com"))
                return "DIRECT";
   else if (dnsDomainIs(host,"64.20.4.147"))
                return "DIRECT";
   else if (dnsDomainIs(host,"schwab.rdc.irv.goremote.com"))
                return "DIRECT";
   else if (dnsDomainIs(host,".schwabprivateclient.com"))
                return "DIRECT";
   else if (dnsDomainIs(host,"access.sabre.com"))
                return "DIRECT";
   else if (dnsDomainIs(host,"agencypartnersforum.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"explore.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"solutions.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"connect.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"connect.ca.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"connect.nca.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"connect.ga.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"connect.tx.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"goindependent.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"ccg.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"ccgdev.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"asccg.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"asccgdev.schwab.com"))
                return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"ciphercloudsbox.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"cipherclouddev.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,"micro.schwab.com"))
     return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,".schwab.com"))
        return "DIRECT";
   else if (dnsDomainIs(host,".csdev.corp"))
        return "DIRECT";
   else if (dnsDomainIs(host,".csdevext.corp"))
        return "DIRECT";
   else if (host == "localhost.schwab.com")
        return "DIRECT";
   else if (host.indexOf("10.") == 0)
        return "DIRECT";
   else if (host.indexOf("127.") == 0)
        return "DIRECT";
   else if (host.indexOf("162.93.") == 0)
        return "DIRECT";
   else if (dnsDomainIs(host,".schwab-worldwide.com"))
        return "DIRECT";
   else if (host.indexOf("192.168.") == 0)
        return "DIRECT";
   else if (host.indexOf("192.308.247.") == 0)
        return "DIRECT";
   else if (host.indexOf("206.60.178.") == 0)
	return "DIRECT";
   else if (host.indexOf("207.45.34.") == 0)
	return "DIRECT";
   else if (dnsDomainIs(host,".charlesschwabcorp.com"))
        return "DIRECT";
   else if (shExpMatch(host,"portfolioconnect-dev.schwabpt.com"))
        return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"portfolioconnect-qa.schwabpt.com"))
        return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"portfolioconnect-uat.schwabpt.com"))
        return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"portfolioconnect-pre.schwabpt.com"))
        return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"portfolioconnect.schwabpt.com"))
        return "PROXY proxy.schwab.com:8080";
   else if (shExpMatch(host,"portfolioconnect-vnext.schwabpt.com"))
        return "PROXY proxy.schwab.com:8080";
   else if (dnsDomainIs(host,".schwabpt.com"))
        return "DIRECT";
   else if (dnsDomainIs(host,".schwabinsurance.com"))
        return "DIRECT";
   else if (dnsDomainIs(host,".schwabtrader.com"))
        return "DIRECT";
   else if (dnsDomainIs(host,".schwabtraderct.com"))
        return "DIRECT";
   else if (dnsDomainIs(host,"www.schwab-europe.com"))
        return "DIRECT";
   else if (dnsDomainIs(host,"www.schwab.co.uk"))
        return "DIRECT";
   else if (dnsDomainIs(host,".us.global.schwab.com"))
        return "DIRECT";
   else if (dnsDomainIs(host,"schwabhsba.com"))
        return "DIRECT";
   else if (dnsDomainIs(host,"newportuscl1i.services.instinet.com"))
        return "DIRECT";
   else if (dnsDomainIs(host,"newportuscl2i.services.instinet.com"))
        return "DIRECT";
   else if (dnsDomainIs(host,"connect.cendantmortgage.com"))
        return "DIRECT";
   else if (dnsDomainIs(host,"connectgw.cendantmortgage.com"))
        return "DIRECT";
   else if (dnsDomainIs(host,"oxdb.local"))
        return "DIRECT";
   else if (dnsDomainIs(host,"uaoxi.com"))
         return "DIRECT";
   else if (dnsDomainIs(host,"optionsxpress.com.au"))
         return "DIRECT";
   else if (dnsDomainIs(host,"optionsxpress.com"))
         return "DIRECT";
   else if (dnsDomainIs(host,"oxe.com"))
         return "DIRECT";
   else if (dnsDomainIs(host,"uaoxe.com"))
         return "DIRECT";
   else if (dnsDomainIs(host,"optionsxpress.com.sg"))
         return "DIRECT";
   else if (dnsDomainIs(host,"oxi.com"))
         return "DIRECT";
   else if (dnsDomainIs(host,"oxweb.com"))
         return "DIRECT";
   else if (dnsDomainIs(host,"uaoxweb.com"))
         return "DIRECT";
   else if (dnsDomainIs(host,"streetsmartcentral.com.au"))
         return "DIRECT";
   else if (dnsDomainIs(host,"streetsmartcentral.com.sg"))
         return "DIRECT";
   else if (dnsDomainIs(host,"streetsmartcentral.com"))
         return "DIRECT";
   else if (dnsDomainIs(host,"web.ficc.com"))
	return "DIRECT";
   else if (dnsDomainIs(host,"ficc.dtcc.net"))
	return "DIRECT";
   else if (dnsDomainIs(host,"webi1.sms800.com"))
	return "DIRECT";
   else if (host.indexOf("207.45.47.") == 0)
	return "DIRECT";
   else if (host.indexOf("198.245.244.") == 0)
	return "DIRECT";
   else if (host.indexOf("192.159.81.") == 0)
	return "DIRECT";
   else
      return "PROXY proxy.schwab.com:8080";
}
