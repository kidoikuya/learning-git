package model;

public class SiteEVLogic {
	public void like(SiteEV site) {
		int count = site.getLike();
		site.setLike(count + 1);
	}
	public void dislike(SiteEV site) {
		int count = site.getDislike();
		site.setDisLike(count + 1);
	}
}
