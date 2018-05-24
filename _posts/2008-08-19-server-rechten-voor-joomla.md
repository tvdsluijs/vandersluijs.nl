---
id: 498
title: Server Rechten voor Joomla!
date: 2008-08-19T21:35:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2008/08/19/server-rechten-voor-joomla/
permalink: /blog/2008/08/server-rechten-voor-joomla.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "3942263123760233493"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2008/08/server-rechten-voor-joomla.html
hits:
  - "788"
itrr_another_apply:
  - 'no'
dsq_thread_id:
  - "5879882771"
categories:
  - Tech
---
Veel gebruikers van Joomla! hebben op hun server de rechten van bestanden en mappen verkeerd staan.

Hierdoor kunnen deze joomla! (maar ook overige php sites) sites makkelijk gehackt worden.

Geloof me, het is mij ook gebeurd.

Ik ben eens gaan uitzoeken wat nu de beste manier is om je site oftewel server het beste te beveiligen tegen hackers.

Overigens met onderstaande instellingen zeg ik niet dat het nooit meer mogelijk zal zijn om gehackt te worden, want een server on-hackbaar maken kan maar op 1 manier. En dat is niet verbinding, op welke manier dan ook met een netwerk en internet. (maar ja&#8230; .dat gaat een beetje moeilijk als je je site op internet wilt laten zien)

<a name="more"></a>

De volgende instellingen gelden zowel voor Joomla! 1.0.x als voor Joomla! 1.5

Het zetten van de juiste rechten doe je overigens met een ftp programma of met <a href="http://www.htmlwijzer.nl/artikel/chmod.php" target="_blank">chmod</a>

&nbsp;

<table width="462" border="0">
  </p> </p> 
  
  <tr>
    </p> 
    
    <td>
      Soort
    </td>
    
    <p>
    </p>
    
    <td>
      Rechten
    </td>
    
    <p>
      </tr> 
      
      <p>
      </p>
      
      <tr>
        </p> 
        
        <td>
          Alle php bestenden
        </td>
        
        <p>
        </p>
        
        <td>
          644
        </td>
        
        <p>
          </tr> 
          
          <p>
          </p>
          
          <tr>
            </p> 
            
            <td>
              configuration.php
            </td>
            
            <p>
            </p>
            
            <td>
              646
            </td>
            
            <p>
              </tr> 
              
              <p>
              </p>
              
              <tr>
                </p> 
                
                <td>
                  administrator/components/
                </td>
                
                <p>
                </p>
                
                <td>
                  707
                </td>
                
                <p>
                  </tr> 
                  
                  <p>
                  </p>
                  
                  <tr>
                    </p> 
                    
                    <td>
                      administrator/modules/
                    </td>
                    
                    <p>
                    </p>
                    
                    <td>
                      707
                    </td>
                    
                    <p>
                      </tr> 
                      
                      <p>
                      </p>
                      
                      <tr>
                        </p> 
                        
                        <td>
                          administrator/templates/
                        </td>
                        
                        <p>
                        </p>
                        
                        <td>
                          707
                        </td>
                        
                        <p>
                          </tr> 
                          
                          <p>
                          </p>
                          
                          <tr>
                            </p> 
                            
                            <td>
                              cache/
                            </td>
                            
                            <p>
                            </p>
                            
                            <td>
                              707
                            </td>
                            
                            <p>
                              </tr> 
                              
                              <p>
                              </p>
                              
                              <tr>
                                </p> 
                                
                                <td>
                                  components/
                                </td>
                                
                                <p>
                                </p>
                                
                                <td>
                                  707
                                </td>
                                
                                <p>
                                  </tr> 
                                  
                                  <p>
                                  </p>
                                  
                                  <tr>
                                    </p> 
                                    
                                    <td>
                                      images/
                                    </td>
                                    
                                    <p>
                                    </p>
                                    
                                    <td>
                                      707
                                    </td>
                                    
                                    <p>
                                      </tr> 
                                      
                                      <p>
                                      </p>
                                      
                                      <tr>
                                        </p> 
                                        
                                        <td>
                                          images/banners/
                                        </td>
                                        
                                        <p>
                                        </p>
                                        
                                        <td>
                                          707
                                        </td>
                                        
                                        <p>
                                          </tr> 
                                          
                                          <p>
                                          </p>
                                          
                                          <tr>
                                            </p> 
                                            
                                            <td>
                                              images/stories/
                                            </td>
                                            
                                            <p>
                                            </p>
                                            
                                            <td>
                                              707
                                            </td>
                                            
                                            <p>
                                              </tr> 
                                              
                                              <p>
                                              </p>
                                              
                                              <tr>
                                                </p> 
                                                
                                                <td>
                                                  language/
                                                </td>
                                                
                                                <p>
                                                </p>
                                                
                                                <td>
                                                  707
                                                </td>
                                                
                                                <p>
                                                  </tr> 
                                                  
                                                  <p>
                                                  </p>
                                                  
                                                  <tr>
                                                    </p> 
                                                    
                                                    <td>
                                                      mambots/
                                                    </td>
                                                    
                                                    <p>
                                                    </p>
                                                    
                                                    <td>
                                                      707
                                                    </td>
                                                    
                                                    <p>
                                                      </tr> 
                                                      
                                                      <p>
                                                      </p>
                                                      
                                                      <tr>
                                                        </p> 
                                                        
                                                        <td>
                                                          mambots/content/
                                                        </td>
                                                        
                                                        <p>
                                                        </p>
                                                        
                                                        <td>
                                                          707
                                                        </td>
                                                        
                                                        <p>
                                                          </tr> 
                                                          
                                                          <p>
                                                          </p>
                                                          
                                                          <tr>
                                                            </p> 
                                                            
                                                            <td>
                                                              mambots/editor/
                                                            </td>
                                                            
                                                            <p>
                                                            </p>
                                                            
                                                            <td>
                                                              707
                                                            </td>
                                                            
                                                            <p>
                                                              </tr> 
                                                              
                                                              <p>
                                                              </p>
                                                              
                                                              <tr>
                                                                </p> 
                                                                
                                                                <td>
                                                                  mambots/search/
                                                                </td>
                                                                
                                                                <p>
                                                                </p>
                                                                
                                                                <td>
                                                                  707
                                                                </td>
                                                                
                                                                <p>
                                                                  </tr> 
                                                                  
                                                                  <p>
                                                                  </p>
                                                                  
                                                                  <tr>
                                                                    </p> 
                                                                    
                                                                    <td>
                                                                      mambots/systeem/
                                                                    </td>
                                                                    
                                                                    <p>
                                                                    </p>
                                                                    
                                                                    <td>
                                                                      707
                                                                    </td>
                                                                    
                                                                    <p>
                                                                      </tr> 
                                                                      
                                                                      <p>
                                                                      </p>
                                                                      
                                                                      <tr>
                                                                        </p> 
                                                                        
                                                                        <td>
                                                                          media/
                                                                        </td>
                                                                        
                                                                        <p>
                                                                        </p>
                                                                        
                                                                        <td>
                                                                          707
                                                                        </td>
                                                                        
                                                                        <p>
                                                                          </tr> 
                                                                          
                                                                          <p>
                                                                          </p>
                                                                          
                                                                          <tr>
                                                                            </p> 
                                                                            
                                                                            <td>
                                                                              modules/
                                                                            </td>
                                                                            
                                                                            <p>
                                                                            </p>
                                                                            
                                                                            <td>
                                                                              707
                                                                            </td>
                                                                            
                                                                            <p>
                                                                              </tr> 
                                                                              
                                                                              <p>
                                                                              </p>
                                                                              
                                                                              <tr>
                                                                                </p> 
                                                                                
                                                                                <td>
                                                                                  templates/
                                                                                </td>
                                                                                
                                                                                <p>
                                                                                </p>
                                                                                
                                                                                <td>
                                                                                  707
                                                                                </td>
                                                                                
                                                                                <p>
                                                                                  </tr> 
                                                                                  
                                                                                  <p>
                                                                                  </p>
                                                                                  
                                                                                  <tr>
                                                                                    </p> 
                                                                                    
                                                                                    <td>
                                                                                      Overige mappen
                                                                                    </td>
                                                                                    
                                                                                    <p>
                                                                                    </p>
                                                                                    
                                                                                    <td>
                                                                                      755
                                                                                    </td>
                                                                                    
                                                                                    <p>
                                                                                      </tr> 
                                                                                      
                                                                                      <p>
                                                                                      </p>
                                                                                      
                                                                                      <tr>
                                                                                        </p> 
                                                                                        
                                                                                        <td>
                                                                                          tmp (Joomla! 1.5)
                                                                                        </td>
                                                                                        
                                                                                        <p>
                                                                                        </p>
                                                                                        
                                                                                        <td>
                                                                                          707
                                                                                        </td>
                                                                                        
                                                                                        <p>
                                                                                          </tr> 
                                                                                          
                                                                                          <p>
                                                                                          </p>
                                                                                          
                                                                                          <tr>
                                                                                            </p> 
                                                                                            
                                                                                            <td>
                                                                                               
                                                                                            </td>
                                                                                            
                                                                                            <p>
                                                                                            </p>
                                                                                            
                                                                                            <td>
                                                                                               
                                                                                            </td>
                                                                                            
                                                                                            <p>
                                                                                              </tr> 
                                                                                              
                                                                                              <p>
                                                                                                </tbody> 
                                                                                                
                                                                                                <p>
                                                                                                  </table> 
                                                                                                  
                                                                                                  <p>
                                                                                                    Overigens is het nog veiliger om alles op niet schrijfbaar te zetten (dus 755) maar het moet ook wel een beetje werkbaar blijven natuurlijk.
                                                                                                  </p>
                                                                                                  
                                                                                                  <p>
                                                                                                    En&#8230; zorg dat je backups hebt !
                                                                                                  </p>